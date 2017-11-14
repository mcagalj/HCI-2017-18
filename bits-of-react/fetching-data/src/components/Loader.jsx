import React from 'react'
import classnames from 'classnames'
import 'styles/Loader.css'

export default (props) => (
    <div className={classnames('Loader__container', props.className)} 
        style={{
            [props.width ? 'width' : null]: props.width,
            [props.width ? 'height' : null]: props.width}}>
        <div className={'Loader'} 
            style={{
                [props.border ? 'borderWidth' : null]: props.border,
                [props.border ? 'borderWidthTop' : null]: props.border 
            }}/>
    </div>
)