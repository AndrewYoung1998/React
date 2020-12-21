import React from "react";
import Todo from './Todo';

const ToDoList = (props) =>{
    const items = props.items.map((words,index) =>{
        return <Todo content={words} key={index} id={index} onDelete={props.onDelete}/>
    })
    return(
        <div className='list-wrapper'>
            {items}
        </div>
    )
}

export default ToDoList;