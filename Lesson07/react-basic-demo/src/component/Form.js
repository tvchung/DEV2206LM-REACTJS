import {React,Component} from 'react';
class Form extends Component{
    constructor(props){
      super(props);
      this.state = {
        studentId:props.studentId, 
        studentName:props.studentName,
        age:props.age, 
        sex:props.sex, 
        birthDay:props.birthDay,
        birthPlace:props.birthPlace, 
        address:props.address
      }
    }
    handleChange = (event)=>{
      let name = event.target.name;
      let value = event.target.value;
      // console.log(name, value);
      this.setState({
        [name]:value,
      });
    }

    handleClickSubmit = ()=>{
      // xử lý cho các trường hợp khác nhau [ Thêm, Xem, Sửa]
      let actionName=this.props.actionName;
      if(actionName === "Thêm"){
        let studentNew = {
          studentId:this.state.studentId, 
          studentName:this.state.studentName,
          age:this.state.age, 
          sex:this.state.sex, 
          birthDay:this.state.birthDay,
          birthPlace:this.state.birthPlace, 
          address:this.state.address
        };
        console.log(studentNew);
        // đẩy lên App
        this.props.handleClickThem(false,studentNew);
      }
      //this.props.clickClose(false);
    }
    
    
    render(){
        let actionName=this.props.actionName;
        // let student= this.props.student;
        return(
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Thông tin sinh viên</h3>
                <form className="form-sample">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Mã sinh viên
                    </label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control"
                        name="studentId"
                        value={this.student.studentId}
                        onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Tên sinh viên
                    </label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" 
                        name="studentName"
                        value={this.state.studentName}
                        onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Tuổi</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" 
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Giới tính</label>
                    <div className="col-sm-9">
                      <select className="form-control"
                        
                        name="sex"
                        value={this.state.sex}
                        onChange={this.handleChange} 
                        >
                        <option value={true}>Nam</option>
                        <option value={false}>Nữ</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Ngày sinh</label>
                    <div className="col-sm-9">
                      <input
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                        name="birthDay"
                        value={this.state.birthDay}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Nơi sinh</label>
                    <div className="col-sm-9">
                      <select className="form-control"
                        name="birthPlace"
                        value={this.state.birthPlace}
                        onChange={this.handleChange}
                        >
                        <option value={"Hà nội"}>Hà Nội</option>
                        <option value={"Tp. Hồ chí minh"}>TP. Hồ Chí Minh</option>
                        <option value={"Đà nẵng"}>Đà Nẵng</option>
                        <option value={"Quảng Ninh"}>Quảng Ninh</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Địa chỉ</label>
                    <div className="col-sm-9">
                      <textarea className="form-control" defaultValue={this.state.address}
                        name="address" onChange={this.handleChange}/>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary me-2" 
                    onClick={this.handleClickSubmit}>
                    {actionName}
                  </button>
                </form>
              </div>
            </div>
        );
    }
}
export default Form;