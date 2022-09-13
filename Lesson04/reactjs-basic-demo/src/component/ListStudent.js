import { React, Component } from "react";
import Student from "./Student";

class ListStudent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { students,doNanTrump } = this.props;
    let listElementStudent = students.map((st, index) => {
      return <Student key={st.studentid} student={st} stt={index+1} />;
    });
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên - {doNanTrump} </h3>
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
