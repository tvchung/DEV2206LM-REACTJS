import React from "react";
// import ReactDOM from 'react-dom/client';

const myArr = ["Apple","Banana","Orange"];
const myList = myArr.map((item)=><p>{item}</p>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myList);

export default myList;