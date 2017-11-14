'use strict'

import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import 'styles/main.css'

import UsersContainer from 'components/UsersContainer.jsx'

class App extends Component {
    state = { 
        loading: true,
        error: false
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://reqres.in/api/users")
            const data = await response.json()
            this.setState({loading: false, users: data.data})
        } catch(error) {
            this.setState({loading: false, error: true})
        }
    }
    
    render() {
        return (
            <div className='container'>
                <h1 className='title'>Fetching data asynchronously</h1>            
                <UsersContainer {...this.state}/>
            </div>  
        )      
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))

// Supporting hot module reloading (HMR)
if (module.hot) module.hot.accept();
