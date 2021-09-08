'use strict';

import { Button } from "@material-ui/core";

const e = React.createElement;

class Box extends React.Component {
    render() {
        return (
            <div className="content">
                <img src={this.props.logo}></img>
                <div className="line"></div>
                <div>{this.props.section}</div>
                <div className="line"></div>
                <Button variant="contained" color="primary" disabled="true">
                    Posts
                </Button>
                <div className="line"></div>
                <Button variant="contained" color="primary" disabled="true">
                    Repositories
                </Button>
            </div>
        );
    }
}

export default Box
