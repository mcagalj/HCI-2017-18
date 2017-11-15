import React,  { Component } from 'react'
import classnames from 'classnames'
import 'styles/components/UserView.css'

import Loader from 'components/Loader.jsx'

class UsersView extends Component {
    state = {imgLoading: true}

    handleImgLoaded = () => this.setState({imgLoading: false})

    render() {
        const { user } = this.props
        const { imgLoading } = this.state

        const image =
            <img src={user.avatar}
                onLoad={this.handleImgLoaded}
                className={classnames({
                    'UserView__img': true,
                    'UserView__img--show': !imgLoading                                
                })}/>

        const figure = 
            <figure className='UserView__figure'>
                { imgLoading && <Loader className='UserView__loader'/> }
                { image }
            </figure>

        const username = <div>{user.first_name} {user.last_name}</div>

        return (
            <div className='UserView'>     
                { figure }
                { username } 
            </div>
        )
    }
}

export default UsersView