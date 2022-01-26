import React, { useState, useEffect} from "react";
import SingleTask from "../modules/SingleTask.js";
import NewTask from "../modules/NewTask.js";
import TaskDonePopup from "../modules/TaskDonePopup.js";
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
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
        setIsOpen(!isOpen);
  };

  const compareTasks = (a, b) => {
    let aDate = Date.parse(a.date)
    let bDate = Date.parse(b.date)

    if (a.complete && b.complete) {
      if (aDate > bDate) {
        return -1
      } else {
        return 1
      };
    };
    if (a.complete) {
      return 1;
    };
    if (b.complete) {
      return -1;
    };
    if (!a.complete && !b.complete) {
      if (aDate > bDate) {
        return -1
      } else {
        return 1
      };
    };
    return 0
  };

  // Get tasks from db, if there are any
  useEffect(() => {
    document.title = "Tasks List";
    get("/api/tasks", {googleid: props.userGoogleId}).then((taskObjs) => {
      let reversedTaskObjs = taskObjs.reverse();
      reversedTaskObjs.sort(compareTasks)
      setTasks(reversedTaskObjs);
    });
  }, [props.userGoogleId]);

  // Add new Task immediately to the page
  const addNewTask = (taskObj) => {
    setTasks([taskObj].concat(tasks));
  };

  const updateCompletedTask = (id) => {
    var task = tasks.filter(task => task._id === id);
    tasks.splice(tasks.findIndex(t => t._id === id), 1)
    task[0].complete = true;
    console.log(task)
    setTasks(task.concat(tasks));
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
        userGoogleId={taskObj.googleid}
        callTaskDonePopup={togglePopup}
        updateCompletedTask={updateCompletedTask}
      />
    ));
  } else {
    tasksList = <h1 className="not-logged-into-tasks u-Center">No tasks!</h1>
  }

  return (
    <>
      <div className = "Tasks-background">
          <div className = "App-container">
          {props.userName ? (
            <>
            {isOpen && <TaskDonePopup handleClose={togglePopup} />}
            {<NewTask addNewTask={addNewTask} userGoogleId={props.userGoogleId}/>}
            {tasksList}
            </>
          ) : (
            <>
            <h1 className="not-logged-into-tasks u-Center"> You are not logged in. Please log in to view your tasks.</h1>
            </>
          )}
          </div>
      </div>
    </>
  );
};

export default Tasks;