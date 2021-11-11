
import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';

import './Task.css';

const Task = ({task, handleTaskClick, handleTaskDelition}) => {
    return(
        <div className="task-container" style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
        
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="button-container">
                <button className="see-task-details-button" >
                    <CgInfo />
                </button>

                <button className="remove-task-button" onClick={() => handleTaskDelition(task.id)} >
                    <CgClose />
                </button>  
            </div>
        </div>
    );

    // return (
    //     <div className="task-container">
    //         <h3>{task.title}</h3>
    //     </div>
    // );
}

export default Task;