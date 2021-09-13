import './box.css'

class Box extends React.Component {
    render() {
        return (
            <div className="card content">
                <img src={this.props.logo}></img>
                <div className="line"></div>
                <div>{this.props.section}</div>
            </div>
        );
    }
}

export default Box
