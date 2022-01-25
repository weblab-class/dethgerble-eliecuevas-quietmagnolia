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
  
    const [compl, setCompl] = useState(props.complete);
    const [farm, setFarm] = useState([]);
    
    

    useEffect(() => {
        if (props.userGoogleId) {
      get("/api/farms", {googleid: props.userGoogleId}).then((farmObj) => {
        setFarm(farmObj);

  
      });
      }}, [props.userGoogleId]);



    useEffect(() => {


}, [farm]);

    function changeRandomLocation(farm) {
        console.log(farm);
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
        

        if (farm[0].farm !== []) {
        let newFarm = changeRandomLocation(farm[0].farm);
        

        let body = {googleid: props.userGoogleId, newfarm: newFarm};
        post("/api/updatefarm", body);

        console.log("Farm Updated");
        }




        updateTask();
        console.log("Task Submitted");
    };



    return (
        <div className="task-container">
            <span className="Card-story">
                {<TasksButton submitted={compl} handleSubmit={handleSubmit}/>}
                <p className="Card-storyContent">{props.task}</p>
                <p className="Card-storyContent">{props.date}</p>
            </span>
        </div>
    );
};
  
export default SingleTask;
  