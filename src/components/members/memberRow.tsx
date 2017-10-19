// 每一行member jsx
// 它的member 数据 来自于父组件的传递
// 相当也 props 类型MemberEntity[]
// props interface 
// state interface 
// @types

import * as React from 'react'
// 有了类型定义， 数据在任何地方都安全 ts强类型的优势
import {MemberEntity} from '../../model';
import { Link } from 'react-router';
// /member/:id MemberPageContainer save and update
// row => MemberEntity

interface Props {  
    // 所有要检查的地方 都来个MemberEntity接口
    member: MemberEntity
}

export const MemberRow: React.StatelessComponent<Props> = ({member}) =>{
    return (
        <tr>
            <td>
                <img src={member.avatar_url} className="avatar" alt=""/>
            </td>
            <td>
                <Link to={`/member/${member.id}`}>
                    <span>{member.id}</span>
                </Link>
            </td>
            <td>
                <span>{member.login}</span>
            </td>
        </tr>
    )
}