import {React,Component} from 'react';
class Student extends Component{
  handClickEditView =()=>{
    this.props.clickViewEdit(true);
  }
    render(){
        let {student, stt} = this.props;
        let gt = 'Nam';
        if(student.sex == false){
            gt='Nữ';
        }
        return(
            <tr>
                <td>{stt}</td>
                <td>{student.studentid}</td>
                <td>{student.studentName}</td>
                <td>{student.age}</td>
                <td>{student.sex ? 'Nam':'Nữ'} {gt}</td>
                <td>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-danger btn-icon-text"
                      onClick={this.handClickEditView}
                    >
                      Xem
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-icon-text"
                      onClick={this.handClickEditView}
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