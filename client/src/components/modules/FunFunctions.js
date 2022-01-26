
export function getfirstname(name) { //get first name 
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


export function getphrase() {

    const d = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day =  weekday[d.getDay()];
    let min = Math.ceil(1)
    let max = Math.floor(6)
    let num = Math.floor(Math.random() * (max - min) + min);

    if (num === 1){
        return ("Welcome back");
    } else if (num === 2){
        return ("Nice to see you again");
    } else if (num === 3){
        return ("I thought you'd never come back");
    } else if (num === 4){
        return ("Happy " + day);
    } else {
        return ("Let's get to work")
    }
}


export function getphrase2(name) {

    const d = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day =  weekday[d.getDay()];
    let min = Math.ceil(1)
    let max = Math.floor(6)
    let num = Math.floor(Math.random() * (max - min) + min);

    if (num === 1){
        return ("You know what they say: "+day+"s are for admiring yourself.");
    } else if (num === 2){
        return ("Working hard, "+name+".");
    } else if (num === 3){
        return ("Sometimes it's necessary to stop and smell the roses.");
    } else if (num === 4){
        return ("Now that's what I call a grind.");
    } else {
        return ("In case "+name+ " ever doubted themself.")
    }
}

