import {getRelativeJson} from "./sourceJSON.js";

async function compareDates(startDateA, endDateA, target){
    let file = await getRelativeJson(target);
    console.log(file);
    for(let [startDateB, endDateB] of file.dates ){
        console.log('testing file', startDateB, endDateB)
        if(startDateA <= endDateB && endDateA >= startDateB){
            console.log('overlap');
        }
    }
}

// await compareDates('2024/01/01', '2024/12/31', './dates1.json');
await compareDates('2024/01/01', '2024/12/31', './dates2.json');
