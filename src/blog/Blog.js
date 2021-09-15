import React from 'react';
import './blog.css'

export default class Blog extends React.Component {
    render() {
        return (
            <section className="post disable-select">
                <header>Post Temporaneo</header>
                <section>
                    Questo post è temporaneo.
                </section>
            </section>
        );
    }
}