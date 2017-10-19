// tsx typescript 组件 
// jsx 在JavaScript使用HTML语法表达DOM

import * as React from 'react';

// : typescript 类型 一切皆被类型控制防止妖魔化代码
// 遵守 类型的约束 大项目的前提 
// StatelessComponent 是react组件类的一种
// 没有state ，最简单的组件
// 没有ts 只有一个React.Component
 export const About: React.StatelessComponent<{}> = () => {
    return (
    <div className="row about-page top-buffer">
      <h1 className="jumbotron">02 Components</h1>
      <div className="col-xs-12">
        <h1>
          <small>
            This sample takes the sample "01 Hello react" as starting point.
            </small>
        </h1>
        <div className="col-xs-12">
          <h3>
            <small>
              We are adding react components: a main component that consumes a <b>header</b> and an <b>about</b> component.
              </small>
          </h3>
        </div>
      </div>

      <div className="col-xs-12 top-buffer">
        <h3>Highlights</h3>
        <hr />
        <h3>
          <small>
            The most interesting parts which worth to take a look
            </small>
        </h3>
      </div>

      <div className="col-xs-12 top-buffer">
        <ul>
          <li className="top-buffer">
            <h4><b>Components:</b></h4>
            <ul className="top-buffer">
              <li>
                <h4>
                  app.tsx: <small>main component, instantiates header and common component.</small>
                </h4>
              </li>
              <li>
                <h4>
                  header.tsx: <small>simulate a header component (in next samples this will include a nav bar).</small>
                </h4>
              </li>
              <li>
                <h4>
                  aboutPage.tsx: <small>page like component.</small>
                </h4>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    )
 }