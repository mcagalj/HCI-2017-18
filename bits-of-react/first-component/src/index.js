'use strict'

import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import 'styles/main.css'

import LoginForm from 'components/LoginForm.jsx'

// const MyDiv = (props) => (
//     <div className="container">
//         {console.log(props.children)}
//         {props.children}
//     </div>
// )

// const App = () => (
//         <MyDiv>
//             <h1 className='center'>Visibility, feedback, constraints, signifiers</h1>
//             <LoginForm className='center' minPassLength='10'/>
//         </MyDiv>
//     )

const App = () => (
    <div className="container">
        <h1 className='center'>Visibility, feedback, constraints, signifiers</h1>
        <LoginForm className='center' minPassLength='10'/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))

// Supporting hot module reloading (HMR)
if (module.hot) module.hot.accept();
