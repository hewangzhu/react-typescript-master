// 路由接管spa(单页应用) 

import * as React from 'react';
// react-router 
// new Vue Router()
// Router 路由对象 Route 路由规则 path => component
// IndexRoute 根路由 / /about子路由 根子路由 hashHistory
// hashMap /#/
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// 应用有路由接管， App根组件， 根路由混
import { App } from './app';
import { About, MembersPage , MemberPageContainer } from './components';
export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={About}/>
                <Route path="/about" component={About}></Route>
                <Route path="/members" component={MembersPage}></Route>
                <Route path="/member" component={MemberPageContainer}></Route>
                <Route path="/member/:id" component={MemberPageContainer} />
            </Route>
        </Router>
    )
}