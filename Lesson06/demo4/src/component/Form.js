import {React,Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            studentName:'',
            age:0
        }
    }
    handleChange=(event)=>{
        let name = event.target.name;
        let value=event.target.value;
        this.setState({
            [name]:value,
        });
    }

    handleSubmit=(event)=>{
        alert('Xin chào \n' + this.state.studentName +'\n' + this.state.age);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Tên sinh viên:</label>
                    <input type={'text'} name="studentName" value={this.state.studentName}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <label>Tuổi:</label>
                    <input type={'text'} name="age" value={this.state.age} 
                        onChange={this.handleChange} />
                </div>
                <div>
                    <input type={'submit'} value='Submit' />
                </div>
            </form>
        );
    }
}
export default Form;