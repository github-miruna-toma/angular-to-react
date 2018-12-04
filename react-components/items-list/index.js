import React from 'react';
import ReactDOM from 'react-dom';
import {ThreadsList} from "./threadsList";

const title = 'Items-list updated ';

ReactDOM.render(
   <ThreadsList/>,
    document.getElementById('app')
);
module.hot.accept();