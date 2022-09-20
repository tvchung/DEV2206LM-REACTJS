import {React, Component} from 'react';
import './App.css';
import Form from './component/Form';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      studentName:'',
    }
  }

  handleChange=(event)=>{
    this.setState({
      studentName:event.target.value,
    });
  }

  // Lấy dữ liệu trên form
  handleSubmit=(event)=>{
    alert("Welcome to," + this.state.studentName);
    event.preventDefault();
  }
  render(){
    return (
      <div className="container App">
        <form className="my-5 p-5 border bg-gradient-primary" onSubmit={this.handleSubmit}>
            <label>Student Name:</label>
            <input type='text' value={this.state.studentName} onChange={this.handleChange}/>
            <input type='submit' value='Submit' />
        </form>
        <hr/>
        <Form />
      </div>
    );
  }
}

export default App;
