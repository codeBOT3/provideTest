import {getRelativeJson} from "./sourceJSON.js";

async function compareDates(beginDate, endDate, target){
    let file = await getRelativeJson(target);
    console.log(file);
    for(let [begda, enda] of file.dates ){
        console.log('testing file', begda, enda)
        if(beginDate <= begda && endDate <= enda)
    }


}

await compareDates('testBegin', 'testEnd', './dates.json');
