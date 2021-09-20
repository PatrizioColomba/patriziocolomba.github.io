import React from 'react';
import './box.css'
import '../vars.css'
import { NavLink } from 'react-router-dom'

class Box extends React.Component {
    render() {
        return (
            <NavLink to={this.props.url} activeClassName="selected">
                <div className="content">
                    <img src={this.props.logo} alt=""></img>
                    <div className="line"></div>
                    <div>{this.props.section}</div>
                </div>
            </NavLink>
        );
    }
}

export default Box