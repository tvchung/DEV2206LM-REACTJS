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
        {studentId:"SV001", studentName:"Nguyễn Văn A",age:20, sex:true, birthDay:"2002-04-23",birthPlace:"Hà nội", address:"25 Vũ Ngọc Phan"},
        {studentId:"SV002", studentName:"Nguyễn Văn B",age:21, sex:false, birthDay:"2002-09-09",birthPlace:"Đà nẵng", address:"1 Ngô Quyền"},
        {studentId:"SV003", studentName:"Nguyễn Văn C",age:19, sex:true, birthDay:"2002-07-07",birthPlace:"Tp. Hồ chí minh", address:"25 Vũ Tông Phan"}
      ],
      isToggle:false,
      actionName:'',
      selectedStudent:{},
      searchData:''
    }
  }

  // xử lý nhận dữ liệu từ conponent con (Control) - 
  // setState isToggle = toggle; actionName=actionParam
  handleClickNewSt = (toggle, actionParam)=>{
    this.setState({
      isToggle:toggle, // true
      actionName:actionParam // Thêm
    });
  }

  handleClickAdd = (toggle,actionParam)=>{
    this.setState({
      isToggle:toggle, // true
      actionName:actionParam // 'AddNew'
    });
  }

  handleClickClose = (toggle)=>{
    this.setState({
      isToggle:toggle, // false
    });
  }

  // Xem
  handleClickView=(toggle, actionParam,selectedStudent)=>{
    this.setState(
      {
        isToggle:toggle, // true
        actionName:actionParam, // Xem
        selectedStudent:selectedStudent , // đối tượng sinh viên cần xem
      }
    )
  }
  // sửa
  handleClickEdit=(toggle, actionParam, student)=>{
    this.setState(
      {
        isToggle:toggle, // true
        actionName:actionParam, // sửa
        selectedStudent:student,
      }
    )
  }
  // Xử lý khi thêm 
  handleAddNew =(toggle,student)=>{
    // console.log(toggle,student);
    let students = [...this.state.students];

    students.push(student);
    this.setState({
      students:students,
      isToggle:toggle
    });

  }
  // xử lý cập nhật dữ liệu trong trường hợp sửa
  handleClickEditSave = (toggle, studentEdit)=>{
    // console.log("edit:",this.state.selectedStudent);
    // console.log("editsave:",student);
    let {students} = this.state;
    let selected = this.state.selectedStudent;
    students.forEach((st,index)=>{
      if(st.studentId ===selected.studentId){
        students[index] = studentEdit;
      }
    });
    
    this.setState({
      students:students,
      isToggle:toggle
    });
  }
  // Xử lý xóa dữ liệu
  handleClickDelete = (studentId)=>{
    let {students} = this.state;
    let indexDelete=0;
    students.forEach((st,index)=>{
      if(st.studentId ===studentId){
        indexDelete = index;
      }
    });
    students.splice(indexDelete,1);
    this.setState({
      students:students,
    });
  }

  // xử lý cập nhật khi click vào nút tìm trên control
  handleSearch = (searchDataParam)=>{
    this.setState({
      searchData:searchDataParam
    });
  }

  render(){
    let elementForm ='';
    if(this.state.isToggle===true){
      elementForm = <Form  
                          clickClose = {this.handleClickClose} 
                          handleClickThem={this.handleAddNew}
                          handleClickEdit={this.handleClickEditSave}
                          actionName={this.state.actionName}
                          student={this.state.selectedStudent} />
    }
    let students =[];
    if(this.state.searchData == ''){
      students=[...this.state.students];
    }else{ // tìm theo studentName
      this.state.students.forEach((st)=>{
        if(st.studentName.toLowerCase().includes(this.state.searchData.toLowerCase())){
          students.push(st);
        }
      });
    }
    return (
      <div className="">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* control  */}
              <Control 
                clickNewStudent={this.handleClickNewSt}  
                // clickAdd = {this.handleClickAdd}
                clickSearch = {this.handleSearch}

                 />
              {/* ./control  */}
              {/* ListStudent  */}
              <ListStudent  students = {students}  
                  clickView = {this.handleClickView} 
                  clickEdit = {this.handleClickEdit}
                  clickDelete = {this.handleClickDelete}/>
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
