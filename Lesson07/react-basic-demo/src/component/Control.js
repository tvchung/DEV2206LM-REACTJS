import { React, Component } from "react";
class Control extends Component {
 
  handleClickNewStudent = ()=>{
    // alert("haha");
    this.props.clickNewStudent(true,'Thêm');
  }

  handleClickAdd =()=>{
    // thiết lập trạng thái isToggle, actionName thông qua props của component Control từ App
    this.props.clickAdd(true,'AddNew');
  }
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3 ">
            <button type="button" className="btn btn-primary btn-icon-text"
              onClick={this.handleClickNewStudent}
            >
              Thêm mới sinh viên
            </button>
            <button type="button" className="btn btn-success" 
              onClick={this.handleClickAdd}> 
              Add 
            </button>
          </div>
          <div className="col-6 ">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
              />
              <button className="btn btn-primary btn-icon-text">
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control">
              <option value="">Sắp xếp</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;