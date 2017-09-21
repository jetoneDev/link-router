import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from './lib/';
import Page1 from './example/Page1';
import Page2 from './example/Page2';
const routes={
    "/page1":{component:Page1},
    "/page2":{component:Page2}
}

console.log(hashHistory);
ReactDOM.render(
    <Router key="main" history={hashHistory} routes={routes} />, document.getElementById('container'));

