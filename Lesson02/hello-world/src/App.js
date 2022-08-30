// import logo from './logo.svg';
import logo_dev from './logo.png';
import './App.css';

const user = {
  firstName:"Devmaster",
  lastName:"Academy"
}

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

function show(name){
  if(name){
    return <p>Welcome to, {name}</p>;
  }else{
    return <p>Welcome to....</p>;
  }
}
//Tag có nhiều phần tử con, bọc ngoài nó bằng một JSX tags
const element = (
  <div>
    <h2>{show("Chung TV")}</h2>
    <h3>{show()}</h3>
  </div>
);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo_dev} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Xin chào, Devmaster</h2>
        <hr />
        <h2>{formatName(user)}</h2>
        <p>Họ đệm: {user.firstName}</p>
        <p>Tên:{user.lastName}</p>
        {show("Chung Trịnh")}
        {show()}
        {element}
      </header>
    </div>
  );
}

export default App;
