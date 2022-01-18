import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

import "./SingleTask.css";
import "../../utilities.css";

/**
 * SingleTask is a component for displaying a single task
 *
 * Proptypes
 * @param {string} _id of the task
 * @param {string} task to complete
 * @param {Date} date to complete by
 * @param {Boolean} complete whether the task is completed
 */

const SingleTask = (props) => {
  
    const [compl, setCompl] = useState(complete)

    const updateTask = () => {
        const body = {objectId: _id}
        post("/api/updatetask", body).then(() => {
          setCompl(true);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateTask();
    };

    return (
        <div className="Card-container">
            <span className="Card-story">
                {compl ? (
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
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </>
                )}
                <p className="Card-storyContent">{props.task}</p>
                <p className="Card-storyContent">{props.date}</p>
            </span>
        </div>
    );
};
  
export default SingleTask;
  