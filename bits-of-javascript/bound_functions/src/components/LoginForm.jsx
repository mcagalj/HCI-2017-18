import React, { Component } from 'react'
import SubmitButton from 'components/SubmitButton.jsx'
import 'styles/LoginForm.css'

class LoginForm extends Component {   
    constructor(props) {
        super(props)
        this.state = {pass: '', passRepeated: ''}        
        this.handlePassChange = this.handlePassChange.bind(this)
    }
    
    // Bind function explicitely in the constructor
    handlePassChange(event) {
        this.setState({pass: event.target.value})
        // console.log(event.target.value, this)
    }

    // Bind using an arrow function
    handlePassRepeatChange = event => this.setState({passRepeated: event.target.value})
    handleSubmit = event => {
        alert(`Passphrase was submitted: [${this.state.pass}]`)
        this.setState({pass: '', passRepeated: ''})
    }

    passShort = () => this.state.pass.length < this.props.minPassLength ? true : false 
    passMismatch = short => !short && this.state.pass !== this.state.passRepeated ? true : false

    render() {
        const short = this.passShort()
        const mismatch = this.passMismatch(short)

        const submitMessage = () => {
            if (short) return `Passphrase too short (min ${this.props.minPassLength} chars)`
            if (mismatch) return 'Passphrase mismatch'
            return 'Sign Up'
        }

        let button = <SubmitButton text={submitMessage()} onClick={this.handleSubmit}/> 
        if (short || mismatch) 
            button = <SubmitButton className={'submit-alert'} text={submitMessage()}/>

        return (
            <div className="LoginForm">
                <p>Sign up with a <span className="emph">passphrase</span>:</p>
                
                <input autoFocus type="password" placeholder="Enter a passphrase"
                    className={short ? 'alert' : null} 
                    value={this.state.pass}
                    onChange={this.handlePassChange}
                />

                <input type="password" placeholder="Repeat the passphrase"
                    className={mismatch ? 'alert': null}
                    value={this.state.passRepeated}
                    onChange={this.handlePassRepeatChange}
                />

                { button }
            </div>
        )
    }
}

export default LoginForm