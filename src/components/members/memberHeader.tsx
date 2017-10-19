// 子组件的拆分
// table header   
// table raw 独立的组件
// 复用性 封装
// 组件的拼装（初级） 底层组件的开发（element UI） 协作
import * as React from 'react'

// {}代表props
export const MemberHeader: React.StatelessComponent<{}> = () => {
    return (
        <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
        </tr>
    )
}
