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
 * @param {function} callTaskDonePopup function that brings up a popup
 * @param {function} updateCompletedTask updates the completed prop
 */

const SingleTask = (props) => {
    const [farm, setFarm] = useState([]);

    useEffect(() => {
        if (props.userGoogleId) {
            get("/api/farms", {googleid: props.userGoogleId}).then((farmObj) => {
                setFarm(farmObj);
            });
      };
    }, [props.userGoogleId]);

    useEffect(() => {
    }, [farm]);

    function changeRandomLocation(farm) {
        let locations = Array();

        // find all open positions in array
        for (let x = 0; x < farm.length; x++){
            for (let y = 0; y < farm.length; y++) {
                if (farm[x][y] === '-') {
                    locations.push([x, y]);
                }
            }
        }
        // update random location
        let random_location = locations[Math.floor(Math.random() * locations.length)];
        farm[random_location[0]][random_location[1]] = '+';

        return farm
    }

    const updateTask = () => {
        let body = {objectId: props._id}
        post("/api/updatetask", body).then(() => {
        });
        props.callTaskDonePopup();
        props.updateCompletedTask(props._id);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (farm[0].farm !== []) {
            let newFarm = changeRandomLocation(farm[0].farm);
            let body = {googleid: props.userGoogleId, newfarm: newFarm};
            post("/api/updatefarm", body);
            console.log("Farm Updated");
        };
        updateTask();
        console.log("Task Submitted");
    };

    return (
        <div className="task-container">
            {<TasksButton 
            complete={props.complete} 
            handleSubmit={handleSubmit}/>}
            <p className="task-content">{props.task}</p>
        </div>
    );
};
  
export default SingleTask;
  