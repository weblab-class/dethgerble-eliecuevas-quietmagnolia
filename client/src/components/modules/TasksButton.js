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
            {props.complete ? (
                <>
                    <button
                        type="button"
                        className="NewPostInput-button-complete u-pointer"
                    >
                        Done!
                    </button>
                </>
            ) : (
                <>
                    <button
                        type="submit"
                        className="NewPostInput-button u-pointer"
                        value="Submit"
                        onClick={props.handleSubmit}
                    >
                        Submit
                    </button>
                </>
            )}
        </>
    )
}

export default TasksButton;