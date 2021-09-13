import React,{Component} from 'react';
import Child from  './Child';

class Parent extends Component{
    constructor(){
        super();
        this.state={
            name:"parent"
        }
        this.parent=this.parent.bind(this)
    }
    parent(child){
        alert(`this is ${this.state.name} from ${child}`)
    }


    render(){
        return(
            // <div>hlooo</div>
            <Child parent={this.parent} />
        )
    }
        
    
}

export default Parent;

