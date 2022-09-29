import { React, Component } from "react";
import Student from "./Student";

class ListStudent extends Component {
  
  
  handleCLickView=(toggle,actionParam,selectedStudent)=>{
    this.props.clickView(toggle,actionParam,selectedStudent);
  }

  handleCLickEdit=(toggle,actionParam, student)=>{
    this.props.clickEdit(toggle,actionParam,student);
  }
  handleClickDelete =(studentId)=>{
    this.props.clickDelete(studentId);
  }
  render() {
    let { students } = this.props;
    let listElementStudent = students.map((st, index) => {
      return <Student key={st.studentId} student={st} stt={index+1} 
        clickView={this.handleCLickView} 
        clickEdit={this.handleCLickEdit}
        clickDelete = {this.handleClickDelete}
        />;
    });
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên  </h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {listElementStudent}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListStudent;
