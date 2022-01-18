import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities";

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
 * @param {string} userGoogleId the Google ID of the user
 */

const SingleTask = (props) => {
  
    const [compl, setCompl] = useState(props.complete)

    const updateTask = () => {
        const body = {objectId: props._id}
        post("/api/updatetask", body).then(() => {
          setCompl(true);
          console.log('made an api call to update task')
        });

        // TO DO: implement stats and leveling
        // post("/api/updatetaskscompleted", body)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateTask();
    };

    return (
        <div className="Card-container">
            <div className="Card-story">
                <button
                    type="submit"
                    className="NewPostInput-button u-pointer"
                    value="Submit"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
                <div className="TaskText">
                    <p className="Card-storyContent">{props.task}</p>
                    <p className="Card-commentContent"><b>Date Due:</b> {props.date}</p>
                </div>
            </div>
        </div>
    );
};
  
export default SingleTask;
  