'use strict'

import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import 'styles/main.css'

import LoginForm from 'components/LoginForm.jsx'

const App = () => (
    <div className="container">
        <h1 className="title">Visibility, feedback, constraints, signifiers</h1>
        <div className="center">
            <LoginForm minPassLength="10"/>
        </div>
    </div>    
)

ReactDOM.render(<App/>, document.getElementById('root'))

// // Supporting hot module reloading (HMR)
if (module.hot) module.hot.accept();