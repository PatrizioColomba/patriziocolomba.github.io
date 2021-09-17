import React from 'react';
import ReactMarkdown from 'react-markdown';
import './blog.css'

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {markdown: ""};
    }

    componentDidMount() {
        fetch(this.props.src).then(response => {
            return response.text();
        }).then(text => {
            this.setState({markdown: text});
        })
    }

    render() {
        return (
            <section className="post disable-select">
                <ReactMarkdown>{this.state.markdown}</ReactMarkdown>
            </section>
        );
    }
}