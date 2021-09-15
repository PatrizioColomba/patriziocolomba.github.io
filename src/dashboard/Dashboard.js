import React from 'react';
import Box from '../box/Box';
import './dashboard.css'

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <Box section="Coming soon" logo="/images/kotlin_logo.png"/>
                <Box section="Coming soon" logo="/images/react_logo.png"/>
                <Box section="Coming soon" logo="/images/laravel_logo.png"/> 
                <Box section="Coming soon" logo="/images/spring_logo.png"/> 
            </div>
        );
    }
}

export default Dashboard