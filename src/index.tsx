import * as React from 'react';
import * as ReactDom from 'react-dom';
// import { HelloComponent } from './hello';
import { AppRouter } from './router';

ReactDom.render(
    <div className="container-fluid">
        <AppRouter/>
    </div>,
    document.getElementById('root')
);
