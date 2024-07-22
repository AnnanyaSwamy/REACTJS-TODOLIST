import React from 'react'

export default function TodoCard(props) {
    const {children, handleDelete, index, handleEdit}=props
  return (
            <li className='todoItem'>
                {children}
            <div className="actionsContainer">
                <button onClick={()=>{
                    handleEdit(index)
                }}>
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={()=>{
                    handleDelete(index)
                }}>
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>      
            </li>
  )
}
