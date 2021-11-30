import React from 'react'
import {ChecklistItem} from "./ChecklistItem";

export const Checklist = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Checklist</h3>
            {props.checklist.length===0? "No item to display":  
            props.checklist.map((checklistItem)=>{
                console.log(checklistItem.sno);
                return (<ChecklistItem checklistItem={checklistItem} key={checklistItem.sno} onDelete={props.onDelete}/>   
                )
            })
              } 
        </div>
    )
}
