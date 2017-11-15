import React,  { Component } from 'react'
import 'styles/components/UsersContainer.css'

import LoadingView from 'components/LoadingView.jsx'
import ErrorView from 'components/ErrorView.jsx'
import UserView from 'components/UserView.jsx'

export default ({ loading, users }) => {
    
    const Users = () => (
        <div className='UsersContainer'>
            {users.map((user, index) => <UserView key={index} user={user}/>)}
        </div>
    )

    if (loading) return <LoadingView/>
    if (users) return <Users/>
    return <ErrorView/>
}