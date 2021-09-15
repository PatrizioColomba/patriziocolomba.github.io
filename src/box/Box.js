import React from 'react';
import './box.css'
import '../vars.css'

class Box extends React.Component {
    render() {
        return (
            <div className="card content">
                <img src={this.props.logo} alt=""></img>
                <div className="line"></div>
                <div>{this.props.section}</div>
            </div>
        );
    }
}

export default Box