import React from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './blog.css'

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {markdown: "", section: this.props.section};
    }

    componentDidMount() {
        let url = "posts/"+this.state.section+"/post.md"
        console.log(url);
        fetch(url).then(response => {
            return response.text();
        }).then(text => {
            this.setState({markdown: text});
        })
    }

    render() {
        return (
            <section className="post disable-select">
                <ReactMarkdown
                    children={this.state.markdown}
                    components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                            <SyntaxHighlighter
                                showLineNumbers={true}
                                children={String(children).replace(/\n$/, '')}
                                style={docco}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                            ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                            )
                        }
                    }}
                />
            </section>
        );
    }
}