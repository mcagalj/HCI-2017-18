import React,  { Component } from 'react';
import Loader from 'components/Loader.jsx'

class UsersView extends Component {
    state = {imgLoading: true}

    handleImgLoaded = () => this.setState({imgLoading: false})

    render() {
        const { user } = this.props
        const { imgLoading } = this.state

        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0.5em'}}>     

                <figure style={{position: 'relative', margin: '0.5em'}}>
                        { imgLoading && <Loader width='60%'/> }
                        <img src={user.avatar}
                            width={'50px'} 
                            height={'50px'}                    
                            onLoad={this.handleImgLoaded}
                            style={{
                                visibility: imgLoading ? 'hidden' : 'visible'
                            }}/>    
                </figure>
                
                <div>{user.first_name} {user.last_name}</div>
            </div>
        )
    }
}

export default UsersView