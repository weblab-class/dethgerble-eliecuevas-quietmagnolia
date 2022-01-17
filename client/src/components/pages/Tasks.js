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
 * @param {string} userGoogleId of user
 */

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);

  // Get tasks from db, if there are any
  useEffect(() => {
    document.title = "Tasks List";
    get("/api/tasks", {googleid: userGoogleId}).then((taskObjs) => {
      setTasks(taskObjs);
    });
  }, []);

  // Add new Task immediately to the page
  const addNewTask = (taskObj) => {
    setTasks([taskObj].concat(tasks));
  };

  let tasksList = null;
  const hasTasks = tasks.length !== 0;
  if (hasTasks) {
    tasksList = tasks.map((taskObj) => (
      <NewTask
        _id={taskObj._id}
        task={taskObj.task}
        date={taskObj.date}
      />
    ));
  } else {
    tasksList = <div>No tasks!</div>;
  }



  return (
    <>
 
    {props.userName ? (
      <>
      {props.userId && <NewTask addNewTask={addNewTask} />}
      {tasksList}
      </>
    ) : (
      <>
      <h1 className = "Tasks-LoggedOut"> You are not logged in. Please log in to view your tasks.</h1>
      </>
    )};

    </>
  );
};

export default Tasks;