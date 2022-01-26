import { get, post } from "../../utilities";


function FarmSearch(userGoogleId){

    let farm = "placeholder";

    //console.log(userGoogleId);

    if (userGoogleId) {
      get("/api/farms", {googleid: userGoogleId}).then((farmObj) => {
        //console.log(farmObj)
        farm = farmObj[0].farm;
  
      });


    



      //console.log(farm);


        const farmExists = farm !== undefined;
        //console.log("Searching for existing farm...");
        if (farmExists) {
      
          //console.log("Farm exists");
          
      
        } else {
      
          
      
      
          if (userGoogleId) {
            //console.log("Farm doesn't exist: Creating new farm...");
          const newFarm = [];
          for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) { 
              row[j] = '-'
            }
            newFarm[i] = row;
          
          }
      
          //console.log(props.userGoogleId)
          const body1 = {googleid: userGoogleId , farm: newFarm};
      
          post("/api/farm", body1).then((farm) => {
              //console.log("New Farm Made");
          });
      
      
          // console.log(array1);
        }
      
      
        };
}
};
export default FarmSearch;