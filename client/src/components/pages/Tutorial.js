import React, { useState, useEffect} from "react";
import "./Tutorial.css";
import  { getfirstname } from "../modules/FunFunctions.js";

const Tutorial = (props) => {

    const [firstName, setFirstName] = useState("[Loading...]");

    useEffect(() => {

    if (props.userName){

    setFirstName(getfirstname(props.userName));

};
    
}, [props.userName]);


    return (
<>
        {props.userName ? (
        <>
        <div className = "TutorialWrapper">
        <h1 className = "TutorialTops"> It's about time you made it, {firstName}. </h1>
        <h1 className = "TutorialTops"> Welcome to <span className = "LogoTutorial" >uevolve</span>.</h1>
        <h3> To get you off on the right foot, we've made this little tutorial to make sure everything is set up correctly. Please follow carefully.</h3>
        <h4> First of all, a quick explanation.</h4>
        <p> <span className = "LogoTutorial"><b>uevolve</b></span> is a productivity manager, where you can see your completed tasks immortalized in your own personal digital farm. As you do more of what you need to do, watch your farm develop.</p>
        <h4>Let's get a feel for things.</h4>
        <p> Click below to open up the "Farm" page in a new tab, where you'll see your blank, starter farm. Close that page out and come back here once you've admired its beauty and potential enough. </p>
        <p className = "buttonP"><a className = "TutorialLinkA" href = "/farm" target = "_blank" rel="noopener noreferrer">Create Your Farm</a></p>
        <p> Now that you've made and seen your blank farm, let's develop it. We'll do this by creating your first task. Click below to open up your tasks page in a new tab. Type in "Create my First Task" in the "New Task Box", and then click the "+" button. Then, you'll see it below. Click the "Submit" button on the task to mark it as complete. Then you'll be redirected to see your updated farm! Click the x at the top of the pop-up to close it out. Then close that page and come back here.</p>
        <p className = "buttonP"><a className = "TutorialLinkB" href = "/tasks" target = "_blank" rel="noopener noreferrer">Make Your First Task</a></p>
        <p> Now that you've completed a task, your farm has developed! Click the button you pressed earlier to create your farm to see your newly-developed plot just one more time!. Come back one more time when you've realized the beauty of the journey ahead.</p>
        <p> That about sums up the basics. If you ever want a trip down memory lane, check out the bottom of the tasks page. Other than that, if you ever need this page again, click the Register arrow on the home page instead of the Sign In one, or just navigate to "/tutorial". Now get started.</p>
        <p className = "buttonP"><a className = "TutorialLinkC" href = "/">Get Evolving</a></p>
        </div>
        </>
        ): (
            <>
            <h1 className="u-Center"> You are not logged in. Please log in to see the tutorial.</h1>
            </> 
        )}

            </>

    );
};


export default Tutorial;