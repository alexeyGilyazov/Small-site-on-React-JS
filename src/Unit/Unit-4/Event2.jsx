import React, { useState } from "react";


const Event2 = () => {
    const fo = () => console.log("Double click works");
    const mouseMove = () => console.log("Mouse Move works");
    const textInput = React.createRef()
    const textOut = React.createRef()

    const [inputValue, setInputValue] = useState('hello')



    function showInput (event) {
        // console.log(event);
        // console.log(event.target.value);
        console.log(textInput.current.value);
        textOut.current.innerHTML = textInput.current.value

        setInputValue(textInput.current.value)
    }


    return (
        <div>
            <h2>Event2 </h2>

            <section>
                <h3>DoubleClick</h3>
                <button onDoubleClick={fo}> DoubleClick </button>
            </section>

            <h2>Event3 </h2>

            <section>
                <h3>Mouse Move</h3>
                <div onMouseMove={mouseMove} className="square"></div>
            </section>

            <h2>Event4 </h2>

            <section>
                <h3>Input</h3>
                <input type="text" defaultValue={'first change'} ref={textInput} onInput={showInput} placeholder="Some Text..." />
                <p ref={textOut}></p>
                <p>{inputValue}</p>
            </section>
        </div>
    );
};

export default Event2;
