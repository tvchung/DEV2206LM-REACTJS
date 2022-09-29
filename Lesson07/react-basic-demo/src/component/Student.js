import {React,Component} from 'react';
class Student extends Component{
    handleClickView = ()=>{
      //  xử lý khi người dùng click vào nút xem thông tin
      // truyền giá trị lên ListStudent
      this.props.clickView(true,'Xem');
    }
    handleClickEdit = (selectedStudent)=>{
      this.props.clickEdit(true,'Sửa',selectedStudent);
    }
    render(){
        let {student, stt} = this.props;
        let gt = 'Nam';
        if(student.sex === false){
            gt='Nữ';
        }
        return(
            <tr>
                <td>{stt}</td>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.age}</td>
                <td>{student.sex ? 'Nam':'Nữ'} {gt}</td>
                <td>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-danger btn-icon-text"
                       onClick={this.handleClickView}
                    >
                      Xem
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-icon-text"
                      onClick={()=>this.handleClickEdit(student)}
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-icon-text"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
        );
    }
}
export default Student;