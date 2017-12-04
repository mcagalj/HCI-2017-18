'use strict'

import React,  { Component } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import 'styles/main.css'

import {
    HashRouter as Router,
    Route,
    Redirect,
    HashRouter
} from 'react-router-dom'

import LoadingView from 'components/LoadingView.jsx'
import ErrorView from 'components/ErrorView.jsx'
import CSSTransition from 'containers/CSSTransition.jsx'
import Nav from 'containers/layout/Nav.jsx'
import Header from 'containers/layout/Header.jsx'
import Main from 'containers/layout/Main.jsx'
import Footer from 'containers/layout/Footer.jsx'


// TBD: Put this message into an external configuration file.
const ERROR_TEXT = 'Sorry, failed to load data. Please try again.'

// The browser preserves its current scroll position on route change.
// With this component we force it to top on each route change.
const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
}

class App extends Component {
    state = { 
        loading: true,
        error: false,
        navBottom: 0
    }

    async componentDidMount() {
        try {
            const response = await fetch(this.props.data, {cache: 'no-cache'})
            const data = await response.text()
            this.setState({loading: false, data: JSON.parse(data)})
        } catch(error) {
            console.log(error)
            this.setState({loading: false, error: true})
        }
    }

    // We assume the Nav bar to be fixed to the top of the page.
    // updateNavDimensions = ({ top, height }) => this.setState({navBottom: top + height})
    updateNavDimensions = ({ height }) => this.setState({navBottom: height})

    render() {
        const { loading, error, navBottom, data } = this.state
        
        if (loading) return <LoadingView/>
        if (error) return <ErrorView text={ERROR_TEXT}/>
        if (data) {
            const { navigation, header, footer, content } = data

            return (
                <Router>  
                    <CSSTransition
                        className='container'
                        classNameStart='transition--start'
                        classNameEnd='transition--end'>
                            
                            <Route component={ScrollToTop}/>

                            <Nav 
                                className={'center pad'} 
                                links={navigation} 
                                updateNavDimensions={this.updateNavDimensions}/>
                            
                            <Header 
                                className={'center pad'}
                                navBottom={navBottom}
                                {...header}/>
                            
                            <Main 
                                className={'center pad flex-grow'}
                                navBottom={navBottom} 
                                content={content}/>
                            
                            <Footer 
                                className={'center pad'} 
                                {...footer}/>

                    </CSSTransition>

                </Router>
            )
        }
    }
}

ReactDOM.render(
    <App data={'data.json'}/>, 
    document.getElementById('root'))

// Supporting hot module reloading (HMR)
if (module.hot) module.hot.accept();
