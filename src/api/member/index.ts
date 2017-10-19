import { MemberEntity } from '../../model';
import { members } from './mockData'
//内存数据
let mockMembers = members;
// ajax 数据通信
const baseURL = 'https://api.github.com/orgs/lemoncode'
// fetchMembers 声明 这个函数是Promise类型
// Promise类型必须要有一个参数 resolve数据的泛型
// MemberEntity[] 一条数据要满足的接口
// MemberEntity[] ts 数组的每一项的类型 [1, "222", true]
// MemberEntity类型的数组

const fetchMembers = (): Promise<MemberEntity[]> => {
    return Promise.resolve(mockMembers);
}
// fetch 天生的promise
const fetchMembersAsync = (): Promise<MemberEntity[]> => {
    const memberURL=`${baseURL}/members`;
    return fetch(memberURL)
        .then((response) => response.json())
        .then(mapToMembers)
}
// 遍历
// any[] 数组 Object any 不care ts any[] => MemberEntity
const mapToMembers = (githubMembers: any[]): MemberEntity[] => {
    return githubMembers.map(mapToMember);
}
const mapToMember = (githubMember): MemberEntity => {
    return {
        id: githubMember.id 

,
        login: githubMember.login,
        avatar_url: githubMember.avatar_url
    }
}
// Boolean 
const saveMember = (member: MemberEntity): Promise<boolean> => {
    // login 唯一的 重复数据 id 新增及修改  id=-1
    const index = mockMembers.findIndex(m => m.id === member.id 

)
    index >= 0? updateMember(member, index) : insertMember(member)
    return Promise.resolve(true);
}
const insertMember = (member: MemberEntity) => {
    //mockMember新增一条
    member.id 

 = mockMembers.length;
    mockMembers =[
        ...mockMembers,
        member
    ];
}
const updateMember = (member:MemberEntity, index: number) => {
    mockMembers = [
        ...mockMembers.slice(0, index),
        member,
        ...mockMembers.slice(index + 1)
    ]

}

const fetchMemberById = (id: number): Promise<MemberEntity> => {
    const member = mockMembers.find(m => m.id === id)
    return Promise.resolve(member);
}
export const memberAPI = {
    fetchMembers,
    fetchMembersAsync,
    saveMember,
    fetchMemberById
    // 根据id 取出member 显示出来 state 更新一下
    //- login''
}
