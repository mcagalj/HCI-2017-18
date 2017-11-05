import React, {Component} from 'react'
import { 
    NavLink, 
    Redirect,
    withRouter
} from 'react-router-dom'

import 'styles/components/basic/Nav.css'


const LogoutButton = props => (
    props.authenticator.authenticated ? (
        <div                         
            className={'Nav__link flex-end'}
            onClick={() => {
                props.authenticator.logout()                                
                props.history.push(history.location)
            }}
        >
            Logout
        </div>
    ) : (
        null
    )    
)

const LogoutButtonWithRouter = withRouter(LogoutButton)

const Nav = props => ( 
    <nav className={'Nav__container'}>
        <div className={'Nav__link-wrapper'}>
            {
                props.links.map((link, index) => (
                        <NavLink                         
                            key={index}
                            className={'Nav__link'}
                            activeClassName={'Nav--active'}
                            to={`/${link.toLowerCase()}`}>
                            {link}
                        </NavLink>
                ))
            }
        </div>
        
        <LogoutButtonWithRouter {...props} />    
    </nav>
)

export default Nav