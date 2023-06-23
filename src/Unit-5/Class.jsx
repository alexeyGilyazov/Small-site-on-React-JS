import React, { Component } from 'react';

class Class extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            comment: []
        }
        this.myRef = React.createRef()
    }

    handler = () => {
        let currentCount = this.state.count
        currentCount++
        this.setState({
            count: currentCount
        })
    }

    addComment = () => {
        const comment = this.myRef.current.value
        let comments = this.state.comment
        comments.push(comment)
        this.setState({
            'comments' : comments
        })
        this.myRef.current.value= ''
    }

    render() {
        return (
            <div>
                <h1>Class</h1>
                <div>
                    <button onClick={this.handler}>This Button change State</button>
                    <div>
                        {this.state.count % 2 === 0 ? 'even' : 'odd'}
                    </div>
                    <div>
                        {this.state.count}
                    </div>
                </div>
                <div>
                    <textarea ref = {this.myRef}></textarea>
                    <div>
                        <button onClick={this.addComment}>Add Comment</button>
                    </div>
                    <div>
                        <ul>{this.state.comment.map( (item,index) => <li key={index.toString()}>{item}</li>)}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Class;

