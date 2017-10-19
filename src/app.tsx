import * as React from 'react'
import {Header, About} from './components';

// react  props.children 相对于 vue router-view
export const App : React.StatelessComponent<{}> = (props) => {
    return (
        <div className="container-fluid">
            <Header />
            {props.children}
        </div>
    )
}