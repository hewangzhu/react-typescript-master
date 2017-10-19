// entity 实体
// typescript 独有的
// 数据 首先考虑类型的严谨 格式
// 接口 member需要实现的属性
// 要数据，先定义接口
// 大型项目 注意质量 model 放数据接口定义
// 都必须实现 模型要求
export interface MemberEntity {
    id: number;  //12546
    login: string; 
    avatar_url: string;
}