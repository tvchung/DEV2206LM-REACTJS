import React from "react";
function Member(props){
    return(
      <div className='member'>
        <p>Name: {props.name}; Age: {props.age}</p>
      </div>
    );
}

export default Member;