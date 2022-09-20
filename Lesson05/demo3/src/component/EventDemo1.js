import {React,Component} from 'react';

class EventDemo1 extends Component{

    // function
    eventHandleClick1 = ()=>{
        alert("Arrow function");
    }

    eventHandleClick2(){
        alert("Function normal .....................");
    }

    eventHandleClick3(param){
        alert("Hello " + param);
    }
    eventHandleClick4 = (param) =>{
        alert("Welcome " + param);
    }
    render(){
        return(
            <div>
                <button  onClick={this.eventHandleClick1}> Button 1 </button>
                <button onClick={this.eventHandleClick2}> Button 2 </button>
                {/* <button onClick={this.eventHandleClick1()}> Button 3 (click1)</button>
                <button onClick={this.eventHandleClick2()}> Button 4 </button> */}
                {/* <button onClick={this.eventHandleClick3("button3")}> Button 3 </button> */}
                <button onClick={()=>this.eventHandleClick3("button3")}> Button 3 </button>
                <button onClick={()=>this.eventHandleClick4("button4")}> Button 4 </button>

            </div>
        );
    }
}

export default EventDemo1;