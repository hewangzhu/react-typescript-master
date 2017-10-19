import * as React from 'react';
// 头部导航 react-router Link
// vue-router
import { Link } from 'react-router';
// 泛型 JS 像c# c++
// className? jsx js html语法 class js 关键字
// laber for 也是关键字
export const Header: React.StatelessComponent<{}> = () => {
    return (
        <div className="row">
            <div className="navbar navbar-default">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/Members">Members</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}