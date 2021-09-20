import React from 'react';
import Box from '../box/Box';
import './dashboard.css';
import { Navbar, Nav } from 'react-bootstrap';

class Dashboard extends React.Component {
    render() {
        return (
            <Navbar>
                <div className="dashboard">
                    <Nav>
                        <Box url="/kotlin" section="Coming soon" logo="/images/kotlin_logo.png"/>
                    </Nav>
                    <Nav>
                        <Box url="/react" section="Coming soon" logo="/images/react_logo.png"/>
                    </Nav>
                    <Nav>
                        <Box url="/laravel" section="Coming soon" logo="/images/laravel_logo.png"/> 
                    </Nav>
                    <Nav>
                        <Box url="/spring" section="Coming soon" logo="/images/spring_logo.png"/> 
                    </Nav>
                </div>
            </Navbar>
        );
    }
}

export default Dashboard