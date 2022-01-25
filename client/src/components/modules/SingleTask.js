import React, { useState, useEffect } from "react";
import { get, post } from "../../utilities";
import TasksButton from "./TasksButton";

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
        let body = {objectId: props._id}
        post("/api/updatetask", body).then(() => {
          setCompl(true);
        });
        updateTasksCompleted();
    };

    const updateTasksCompleted = () => {
        get("/api/stats", {googleid: props.userGoogleId}).then((stats) => {
            console.log(stats)
            // const body = {objectId: stats._id}
            // post("/api/updatetaskscompleted", body)                
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateTask();
    };

    return (
        <div className="Card-container">
            <span className="Card-story">
                {<TasksButton submitted={compl} handleSubmit={handleSubmit}/>}
                <p className="Card-storyContent">{props.task}</p>
                <p className="Card-storyContent">{props.date}</p>
            </span>
        </div>
    );
};
  
export default SingleTask;
  