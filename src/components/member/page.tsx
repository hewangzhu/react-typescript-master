import * as React from 'react';
import { MemberForm } from './memberForm';
import { MemberEntity, MemberErrors } from '../../model';
interface Props {
    member: MemberEntity; //属性
    onChange: (fieldName: string, value: string) => void; //方法
    onSave: () => void;
    memberErrors: MemberErrors;
}
export const MemberPage: React.StatelessComponent<Props> = (props) => {
    return (
        <div className="row">
            <h2>Member Page</h2>
            <MemberForm 
                member={props.member}
                onChange={props.onChange}
                onSave={props.onSave}
                memberErrors={props.memberErrors}
                />
        </div>
    )
}
