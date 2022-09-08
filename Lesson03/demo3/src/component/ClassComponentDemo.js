import {React, Component} from 'react';
class ClassCompDemo extends Component{
    render(){
        return(
            <div>
                <h1> Sử dụng Class Component</h1>
                <hr/>
                <h3>
                    Hello {this.props.userName}
                    <br />
                    Welcome to, {this.props.name}
                </h3>
            </div>
        );
    }
}

export default ClassCompDemo;