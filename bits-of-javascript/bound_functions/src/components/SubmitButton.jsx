import React from 'react'
import classnames from 'classnames'

const SubmitButton = props => (
    <div className={classnames('button', props.className)} 
        onClick={props.onClick}>
        {props.text}
    </div>
)

export default SubmitButton