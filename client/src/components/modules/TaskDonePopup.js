import React from "react";
import "./TaskDonePopup.css";

/**
 * Component to render the Tasks page
 *
 * Proptypes
 * @param {function} handleClose closes the popup
 */

const TaskDonePopup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        Congratulations! You have completed another task. Your farm has increased by one level. 
      </div>
    </div>
  );
};

export default TaskDonePopup;