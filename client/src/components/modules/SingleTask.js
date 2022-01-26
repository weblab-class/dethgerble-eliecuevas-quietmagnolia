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

 let counter = 0;

const SingleTask = (props) => {
    const [farm, setFarm] = useState([]);
    const [tasksCompleted, setTasksCompleted] = useState(-1);


    useEffect(() => {
        if (props.userGoogleId) {
            get("/api/farms", {googleid: props.userGoogleId}).then((farmObj) => {
                setFarm(farmObj);
            });
            console.log("Searching for Existing Stats Page...");
            get("/api/stats", {googleid: props.userGoogleId}).then((statsObj) => {
                console.log(statsObj.length);
                if (statsObj.length === 0){
                    console.log("None Found for now");
                    counter++;
                    console.log(counter);
                    setTasksCompleted(undefined);
                } else {
                console.log("Stats Page Found");
                setTasksCompleted(statsObj[0].taskscompleted);
                
            }
            });
      };

}, [props.userGoogleId]);

console.log(tasksCompleted);

useEffect(() => {

if (tasksCompleted === undefined) {
    console.log("trying");
    if (counter === 7){ //band-aid fix lol
    console.log("No Stats page found...");
    const body1 = {googleid: props.userGoogleId, taskscompleted: 0}
    post("/api/stat", body1).then((stats) => {
        console.log("Stats Schema Initialized");
    setTasksCompleted(0);

    });
    };
} else {
    console.log ("Moving on");
};
}, [counter]);

useEffect(() => {
}, [tasksCompleted]);


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

        let newTasksCompleted = tasksCompleted + 1;
        let body2 = {googleid: props.userGoogleId, taskscompleted: newTasksCompleted}
        post("/api/updatetaskscompleted", body2);
        console.log("Stats updated");
        get("/api/stats", {googleid: props.userGoogleId}).then((statsObj) => {
            setTasksCompleted(statsObj[0].taskscompleted);
        });


        
        updateTask();
        console.log("Task Submitted");
    };

    return (
        <div className="task-container">
            {<TasksButton 
            complete={props.complete} 
            handleSubmit={handleSubmit}/>}
            <div className="task-content">{props.task}</div>
        </div>
    );
};
  
export default SingleTask;
  