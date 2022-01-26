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
    <div className="box">
      <div className="popup-text"> Congratulations! You have completed another task. Your farm has expanded! </div>
      <div className="close-icon" onClick={props.handleClose}>x</div>
    </div>
  );
};

export default TaskDonePopup;