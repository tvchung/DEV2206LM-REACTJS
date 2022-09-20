import {React,Component} from 'react';
class Demo extends Component{
    // sử dụng state
    constructor(props){
        super(props);

        this.state = {
            courseName:'React JS',
            company:"ABC",
        }

        this.handleClick02 = this.handleClick02.bind(this);
    }

    handleClick01 =()=>{
        // sử dụng dữ liệu trong state
        alert("Chảo mừng bạn tham gia khóa học " + this.state.courseName);
    }

    handleClick02(){
        // lấy dữ liệu từ props
        alert("Xin chào, " + this.props.companyName);
    }

    handleClick03 = ()=>{
        // lấy dữ liệu từ props
        alert("Xin chào, " + this.props.companyName);
    }

    changeState = ()=>{
        this.setState({
            courseName:"FrontEnd - ReactJS",
            company:"Devmaster Academy",
        });
        alert("Chảo mừng bạn tham gia khóa học " + this.state.courseName + "\n" +this.state.company);
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick01} >Button Demo 1</button>
                <button onClick={this.handleClick02} >Button Demo 2 (props)</button>
                <button onClick={this.handleClick03} >Button Demo 3 (props)</button>
                <button onClick={this.changeState} >Button Demo 4 (change state)</button>
            </div>
        );
    }
}
export default Demo;