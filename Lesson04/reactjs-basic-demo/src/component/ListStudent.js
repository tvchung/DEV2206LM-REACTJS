import { React, Component } from "react";
import Student from "./Student";

class ListStudent extends Component {
  constructor(props) {
    super(props);
  }
  //event
  handleClickViewEdit = (toggle)=>{
    this.props.clickViewEdit(toggle);
  }
  render() {
    let { students,name } = this.props;
    let listElementStudent = students.map((stud, index) => {
      return <Student key={st.studentid} student={stud} stt={index+1} clickViewEdit={this.handleClickViewEdit} />;
    });
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên - {name} </h3>
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
