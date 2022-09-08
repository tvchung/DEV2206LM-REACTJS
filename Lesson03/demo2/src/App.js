// import logo from './logo.svg';
import './App.css';

import display  from './demo2';

// biến
var company="Devmaster Academy";
// biến đối tượng
const emp={
    name:"Chung Trịnh Văn",
    age:45
};

function App() {
  return (
    <div>
      <h1>Company: {company} </h1>
      <hr />
      <h2>Xin chào, {emp.name} , {emp.age}</h2> 
      <h2> {display()}</h2>
    </div>
  );
}

export default App;
