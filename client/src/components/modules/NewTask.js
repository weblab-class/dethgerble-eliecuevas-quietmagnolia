import React, { useState } from "react";
import "./NewTask.css";
import { post } from "../../utilities";

import "../../utilities.css";

/**
 * New Task denotes new task blocks
 *
 * Proptypes
 * @param {function} addNewTask
 */

const NewTask = (props) => {
  const [value, setValue] = useState("");

  const addTask = (value) => {
    const body = { googleid: value, task: value, date: new Date() };
    post("/api/task", body).then((task) => {
      // display this story on the screen
      props.addNewTask(task);
    });
  };

  // called whenever the user types in the new post input box
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // called when the user hits "Submit" for a new post
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(value);
    setValue("");
  };

  return (
    <div className="Tasks-BlankScreen">
      <input
        type="text"
        placeholder="New Task"
        value={value}
        onChange={handleChange}
        className="NewPostInput-input"
      />
      <button
        type="submit"
        className="NewPostInput-button u-pointer"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default NewTask;