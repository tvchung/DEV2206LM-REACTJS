import logo from './logo.png';
import './App.css';

import FunCompDemo from './component/FunctitonComponentDemo';
import ClassCompDemo from './component/ClassComponentDemo';
import Member from './component/Member';
const elementClass  = <ClassCompDemo userName="ABC" name="Cộng hòa" />

// props -> arrow function

const Member1 = (props)=>{
    return(
      <div className='member'>
        <p>Name: {props.name}; Age: {props.age}</p>
      </div>
    );
}

// Component lồng nhau
const obj = {
  path: 'logo.svg',
  name:'Hoàng nam tiến',
  age:50
}

function Avatar(props){
  return(
    <div>
      <img src={props.link} alt="ảnh" />
    </div>
  );
}

function MemberInfor(props){
  return(
    <div>
      <Avatar  link={props.info.path} />
      <h2>Xin chào {props.info.name} - {props.info.age}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Devmaster" />
      <FunCompDemo userName="DevEdu" name="Devmaster Academy" />
      <FunCompDemo name="Chung Trinh Văn" userName="ChungTrinh" />

      <ClassCompDemo userName="Dev" name="Viện Công Nghệ và Đào tạo Devmaster"/>
      {elementClass}

      <Member name = "Nguyễn Hai Long" age="20" />
      <Member name = "Nguyễn  Long Hai" age="20" />

      <hr />
      <Member1 name="Tường Huy" age="100" />
      <Member1 name="Hoàng Hải" age="101" />

      <hr/>
      <MemberInfor info = {obj} />
    </div>
  );
}

export default App;
