import React, { useEffect, useState } from "react";
import "../../utilities.css";

import "./TasksButton.css";



/**
 * TasksButton is the submission button on the task block
 *
 * Proptypes
 * @param {boolean} complete
 * @param {function} handleSubmit
 */


const TasksButton = (props) => {

    return (
        <>
            <div>
                {props.complete ? (
                    <>
                        <button
                            type="button"
                            className="completed-task-button"
                        >
                            
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            type="submit"
                            className="submit-task-button"
                            value="Submit"
                            onClick={props.handleSubmit}
                        >
                        </button>
                    </>
                )}
            </div>
        </>
    )
}

export default TasksButton;