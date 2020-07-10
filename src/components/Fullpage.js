import React, { Component } from 'react';
import './fullpage.css'

class Fullpage extends Component {
    render() {
        let background = this.props.background
        const { children } = this.props
        return (
            <div className={`fullpage ${this.props.className || ''} `}
             style={{background : background}}>
                {children}
            </div>
        )
    }
}

export default Fullpage