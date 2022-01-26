
function getfirstname(name) { //get first name 
    let result = ""
    let flag = false;
    for (let i = 0; i < name.length; i++){
        if (name[i] === " "){
            flag = true
        } else if(flag === false) {
            result = result + name[i]
        }
    }
    return result
}

export default getfirstname;