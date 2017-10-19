// 点击事件 不能自己做主 props.onSave
import * as React from 'react'
interface Props {
    // 参数为0 void没有返回值 保存表单，新增数据一项
    // 数据在哪里？ /components/member/pageContainer.tsx
    // state: State member:MemberEntity
    // PageContainer.onSave
    onClick: () => void;
    className: string;
    laber: string 
}
export const Button: React.StatelessComponent<Props> = (props) => {
    return (
        <button type="button" className={props.className} onClick={props.onClick}>
            {props.laber}
        </button>
    )
}