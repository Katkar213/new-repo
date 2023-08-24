import  FunctionComp from "./FunctionComp"
import {useState} from "react"


function Prompts(){

    const[data,data1]=useState({
        name:"ketan",
        age:22
    })
    return(

        <>     
            < FunctionComp data={{data ,data1}}/>
          
        </>
    )
}

export {Prompts}