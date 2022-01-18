import React, { useState } from "react";

import { post } from "../../utilities";

import "../../utilities.css";


/**
 * New Task denotes new task blocks
 *
 * Proptypes
 * @param {function} addNewFarm
 * @param {string} userGoogleId
 */

 function create_farm() {
    farm = new Array ( );
    for (i = 0; i < 100; i++) {
      row = new Array ( );
      for (j = 0; j < 100; j++) { 
        row[j] = '-'
      }
      farm[i] = row;
    }
    return farm;
  }
  

const NewFarm = (props) => {
    const [value, setValue] = useState("")

    const body = {googleid: props.userGoogleId , farm: {create_farm()}};
    post("/api/farm", body).then((farm) => {
        console.log("New Farm Made");
    });
};

