import React from "react";
import { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);
    const [comment, setComment] = useState([])

    const myRef = React.createRef()

    let handler = () => {
        let currentCount = count;
        currentCount++;
        setCount(currentCount);
    };

    const addComment = () => {
        const commentValue = myRef.current.value
        let comments = [...comment, commentValue]
        setComment(comments)
        myRef.current.value = ''
    }


    return (
        <div>
            <h1>Class</h1>
            <div>
                <button onClick={handler}>This Button change State</button>
                <div>
                    {count % 2 === 0 ? 'even' : 'odd'}
                </div>
                <div>
                    {count}
                </div>
            </div>
            <div>
                <textarea ref={myRef}></textarea>
                <div>
                    <button onClick={addComment}>Add Comment</button>
                </div>
                <div>
                    <ul>{comment.map((item, index) => <li key={index.toString()}>{item}</li>)}</ul>
                </div>
            </div>
        </div>
    );
};

export default State;
