import React, { useEffect, useState } from "react";
import "../../utilities.css";


/**
 * TasksButton is the submission button on the task block
 *
 * Proptypes
 * @param {boolean} submitted
 * @param {function} handleSubmit
 */


const TasksButton = (props) => {

    const [comp, setComp] = useState(props.submitted)

    useEffect(() => {
        setComp(props.submitted)
    }, [props.submitted]);

    return (
        <>
            {comp ? (
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