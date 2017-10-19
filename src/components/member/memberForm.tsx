import * as React from 'react'
// 使命造人 member
import { MemberEntity, MemberErrors } from '../../model'
import { Input, Button } from '../../common/components/form'

interface Props {
    member: MemberEntity;
    onChange: (filename: string, value: string) => void;
    onSave: () => void;
    memberErrors: MemberErrors;
}
export const MemberForm : React.StatelessComponent<Props> = (props) => {
    return (
        <form action="">
            <h1>Manage member</h1>
            <Input name="login" label="login" value={props.member.login} 
            onChange={props.onChange} 
            error={
                props.memberErrors.login.succeeded?"":props.memberErrors.login.errorMessage
                } />
            <Input name="avatar_url" label="avatar_url" value={props.member.avatar_url} 
            onChange={props.onChange}/>
            <Button onClick={props.onSave} laber="Save" className="btn btn-default"/>
        </form>
    )
}