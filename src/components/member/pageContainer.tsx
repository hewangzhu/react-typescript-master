import * as React from 'react';
import { MemberPage } from './page';
import { MemberEntity, MemberErrors } from '../../model';
// react-router接管项目  所有的接口由他
import { hashHistory } from 'react-router';
import * as toastr from 'toastr';
import { memberAPI } from '../../api/member';
import { memberFormValidation } from './memberFormValidation';
import { FieldValidationResult } from 'lc-form-validation';

// ?Input change State 改变
// 下一站 
interface State {
    member: MemberEntity;
    memberErrors: MemberErrors; //FieldValidationResult
}
interface Props {
    params: {
        id: string;
    };
}
// State 改变 member传下去   onchange函数
// 表单 路由=》组件 /member /member/:id 
// react-router :id    在propds.id 

export class MemberPageContainer extends React.Component<Props, State> {
    constructor() {
        super();

        this.state = {
            member: {
                id: -1,
                login: '',
                avatar_url: ''
            },
            memberErrors: {
                // 状态会变
                login: new FieldValidationResult()
            }
        }
    }
    // 生命周期函数
    public componentDidMount() {
        const memberId = Number(this.props.params.id || 0);
        if( memberId ) {
            memberAPI.fetchMemberById(memberId) 
                .then((member)=> {
                    // 更新state
                    this.setState({
                        ...this.state,
                        member
                }) 
        })
    }
}

    render() {
        return (
            <MemberPage member={this.state.member}
                onChange={this.onFieldValueChange.bind(this)} 
                onSave={this.onSave.bind(this)} memberErrors={this.state.memberErrors}/>
        )
    }
    // state改变 form 就会变
    // 改变状态方法   传递下去 vue emit
    // 私有的
    private onFieldValueChange(fieldName: string, value: string) {
        // 构建新的状态 es6
        // this.state fieldName value
        // change 实时去validate
        memberFormValidation.validateField(this.state.member, fieldName, value)
            .then((FieldValidationResult) => {
                if(FieldValidationResult.type === 'REQUIRED') {
                    FieldValidationResult.errorMessage = '请输入login';
                } else if (FieldValidationResult.type =='MIN_LENGTH') {
                    FieldValidationResult.errorMessage = 'login长度不够';
                }
                const nextState = {
                    ...this.state,
                    member: {
                        ...this.state.member,
                        [fieldName]: value
                    },
                    // 在页面上看到错误
                    memberErrors: {
                        ...this.state.memberErrors,
                        [fieldName]: FieldValidationResult
                    }
                };
                this.setState(nextState)
            })
    }

    private onSave() {
        // api saveMember
        memberFormValidation.validateForm(this.state.member)
            .then((formValidationResult) => {
                if(formValidationResult.succeeded) {
                    memberAPI.saveMember(this.state.member).then(() => {
                        toastr.success('Member saved.');
                        hashHistory.goBack()
                    })
                } else {
                    toastr.error(formValidationResult.fieldErrors[0].errorMessage)
                }
            })
    }
}