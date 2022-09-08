import React from 'react';
function FunCompDemo(props){
    return(
        <div>
            <h1>Function Component Demo</h1>
            <h2>
                Hello {props.userName}
                <br />
                Welcome to, {props.name}
            </h2>
        </div>
    );
}
export default FunCompDemo;