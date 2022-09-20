import {React,Component} from 'react';
import Control from './component/Control';
import Form from './component/Form';
import ListStudent from './component/ListStudent';

class App extends Component {
  // Sử dụng Component để khởi tạo props và state
  constructor(props){
    // Khởi tạo props và state
    super(props);
    this.state = {
      students:[
        {studentid:"SV001", studentName:"Nguyễn Văn A",age:20, sex:true, birthDay:"2002-04-23",birthPlace:"Hà nội", address:"25 Vũ Ngọc Phan"},
        {studentid:"SV002", studentName:"Nguyễn Văn B",age:21, sex:false, birthDay:"2002-09-09",birthPlace:"Đà nẵng", address:"1 Ngô Quyền"},
        {studentid:"SV003", studentName:"Nguyễn Văn C",age:19, sex:true, birthDay:"2002-07-07",birthPlace:"Tp. Hồ chí minh", address:"25 Vũ Tông Phan"}
      ],
      isToggle:false,
      actionName:'',
    }
  }

  handleClickNewSt = (toggle, actionParam)=>{
    this.setState({
      isToggle:toggle,
      actionName:actionParam
    });
  }
  handleClickClose = (toggle)=>{
    this.setState({
      isToggle:toggle
    });
  }

  render(){
    let elementForm ='';
    if(this.state.isToggle==true){
      elementForm = <Form  clickClose = {this.handleClickClose} actionValue={this.state.actionName} />
    }
    return (
      <div className="">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* control  */}
              <Control clickNewStudent={this.handleClickNewSt} />
              {/* ./control  */}
              {/* ListStudent  */}
              <ListStudent  students = {this.state.students} />
              {/* ./ListStudent  */}
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* form student  */}
            {elementForm}
            {/* ./form student  */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
