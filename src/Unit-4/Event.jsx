import React from "react";

const Event = (props) => {

    const f1 = () => console.log('f1 work' + props.letA);


    return (
        <div>
            <h2>Event click</h2>
            <section>
                <h3>Click</h3>
                <button onClick={f1} > Click </button>
            </section>
        </div>
    );
};

export default Event;
