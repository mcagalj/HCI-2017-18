import React,  { Component } from 'react';
import LoadingView from 'components/LoadingView.jsx'
import ErrorView from 'components/ErrorView.jsx'
import UsersView from 'components/UsersView.jsx'

export default ({ loading, users }) => {
    if (loading) return <LoadingView/>
    if (users) return (
        <div style={{width: '40%'}}>
            {users.map( (user, index) => <UsersView key={index} user={user}/>)}
        </div>
    )
    return <ErrorView/>
}