import React from 'react'

export const ChecklistItem = ({checklistItem, onDelete}) => {
    return (
        <>
        <div>
           <h4>{checklistItem.title}</h4>
           <p>{checklistItem.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(checklistItem)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}
