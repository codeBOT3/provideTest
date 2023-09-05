import {getRelativeJson} from "./sourceJSON.js";

async function compareDates(defaultStart, defaultEnd, target){
    let file = await getRelativeJson(target);

    for(let [startDateB, endDateB] of file.dates ){
        console.log('testing file', startDateB, endDateB)
        if(defaultStart <= endDateB && defaultEnd >= startDateB){
            if(defaultStart<=startDateB)
                startDateB = defaultStart;
            if(defaultEnd<=endDateB)
                endDateB = defaultEnd;
            console.log(`testing date change`, startDateB, endDateB);

        }
    }


}
async function compareSets(file_A, file_B){
    const startDate = '2024/01/01';
    const endDate = '2024/12/31';

    let setA = await getRelativeJson(file_A);
    let setB = await getRelativeJson(file_B);


}

let list = ['./dates1.json', './dates2.json', './dates3.json'];
await compareDates('2024/01/01', '2024/12/31', './dates1.json');
await compareDates('2024/01/01', '2024/12/31', './dates2.json');
