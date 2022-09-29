import {React, Component} from 'react';
class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            maNV:"",
            hoTen:"",
            ngaySinh:"",
            gioiTinh:"",
            diaChi:"",
        }
    }

    handleChange=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value,
        });
    }
    render(){
        return(
            <form>
                <div>
                    <label for="maNV">Mã nhân viên:</label>
                    <input type={'text'} name="maNV" 
                            value={this.state.maNV} 
                            onChange={this.handleChange}/>
                </div>
                <div>
                    <label for="hoTen">Họ và tên:</label>
                    <input type={'text'} name="hoTen" value={this.state.hoTen} onChange={this.handleChange}/>
                </div>
                <div>
                    <label for="ngaySinh">Ngày sinh:</label>
                    <input type={'date'} name="ngaySinh" value={this.state.ngaySinh} onChange={this.handleChange}/>
                </div>
                <div>
                    <label for="gioiTinh">Giới tính:</label>
                    <input type={'text'} name="gioiTinh" value={this.state.gioiTinh} onChange={this.handleChange}/>
                </div>
                <div>
                    <label for="diaChi">Địa chỉ:</label>
                    <input type={'text'} name="diaChi" value={this.state.diaChi} onChange={this.handleChange}/>
                </div>
                <div>
                    <label for=""></label>
                    <input type={'submit'}  value={"Submit"}/>
                </div>
            </form>
        );
    }
}

export default Form;