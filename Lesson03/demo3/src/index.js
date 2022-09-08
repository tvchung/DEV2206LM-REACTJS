import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Member from './component/Member';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const Member1 = <Member name="Chung" age="45"></Member>;
// ReactDOM.render(Member1,document.getElementById('member1'));
const Member1 = ReactDOM.createRoot(document.getElementById('member1'));
Member1.render(
  <Member name="Chung" age ="45" />
);

const Member2 = ReactDOM.createRoot(document.getElementById('member2'));
Member2.render(
  <Member name="Trịnh" age ="45" />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
