import logo from './logo.png';
import './App.css';

import fn_Test from './demo1';

var name="Chung Trịnh";
const student={
  id:100,
  name:"Devmaster",
  age:5
};

// Xây dựng hàm

const display = ()=>{
    return <div >
      <p className="btn btn-success">Xin chào, tôi là một arrow function</p>
    </div>;
}

function App() {
  return (
      <section>
          <div className="container">
            <img src={logo} alt="Devmaster" />

            {/* sử dụng biến  */}
            <h2>Welcome to, {name}</h2>
            {/* Sửu dụng biến đối tượng */}
            <p>Mã: {student.id}</p>
            <p>Tên: {student.name}</p>
            <p>Tuổi: {student.age}</p>
            {/* sử dụng hàm  */}
            {display()}

            {/* sử dụng import function  */}
            {fn_Test("Chung",45)}
          </div>
          
      </section>
  );
}

export default App;
