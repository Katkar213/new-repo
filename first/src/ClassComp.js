import React from "react"
import {Component} from "react"


class ClassComp extends Component{
    constructor(Prompts){
        super(Prompts);
            console.log(Prompts)
            
    }

        render(){
            return(
             <div>
              
               { this.props.data}
             </div>
                )
        } 
          
          
        
        
    }


export default ClassComp