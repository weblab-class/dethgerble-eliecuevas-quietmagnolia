import React, { useState, useEffect} from "react";
import SingleTask from "../modules/SingleTask.js";
import NewTask from "../modules/NewTask.js";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Tasks.css";

/**
 * Component to render the Tasks page
 *
 * Proptypes
 * @param {string} userName of user
 * @param {string} userGoogleId of users
 */

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);

  // Get tasks from db, if there are any
  useEffect(() => {
    document.title = "Tasks List";
    get("/api/tasks", {googleid: props.userGoogleId}).then((taskObjs) => {
      setTasks(taskObjs);
    });
  }, [props.userGoogleId]);

  // Add new Task immediately to the page
  const addNewTask = (taskObj) => {
    setTasks([taskObj].concat(tasks));
  };

  let tasksList = null;
  const hasTasks = tasks.length !== 0;
  if (hasTasks) {
    tasksList = tasks.map((taskObj) => (
      <SingleTask 
        key={`SingleTask_${taskObj._id}`}
        _id={taskObj._id}
        task={taskObj.task}
        date={taskObj.date}
        complete={taskObj.complete}
        userGoogleId={taskObj.userGoogleId}
      />
    ));
  } else {
    tasksList = <h1 className="u-Center">No tasks!</h1>
  }

  return (
    <>
    {props.userName ? (
      <>
      {<NewTask addNewTask={addNewTask} userGoogleId={props.userGoogleId}/>}
      {tasksList}
      </>
    ) : (
      <>
      <h1 className="u-Center"> You are not logged in. Please log in to view your tasks.</h1>
      </>
    )}
    </>
  );
};

export default Tasks;