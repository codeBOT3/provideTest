import {getRelativeJson} from "./sourceJSON.js";

async function compareDates(defaultStart, defaultEnd, target){
    let file = await getRelativeJson(target);
    let result =[];
    console.log(file);
    for(let [startDateB, endDateB] of file.dates ){
        //console.log('\n file: ', startDateB, endDateB)
        if(defaultStart <= endDateB && defaultEnd >= startDateB){
            if(defaultStart>=startDateB)
                startDateB = defaultStart;
            if(defaultEnd<=endDateB)
                endDateB = defaultEnd;
            //console.log(`Default Dates Overlap: `, startDateB, endDateB);
            result.push([startDateB, endDateB]);

        }
    }
    return result;



}
async function compareSets(file_A, file_B){
    const startDate = '2024/01/01';
    const endDate = '2024/01/31';

    let setA = await getRelativeJson(file_A);
    let setB = await getRelativeJson(file_B);


}

function getDateOverlap(startDateA, endDateA, startDateB, endDateB){
    let result = [];


    return result;
}

let list = ['./dates1.json', './dates2.json', './dates3.json'];
let res1 = await compareDates('2024/01/01', '2024/01/31', './set_a.json');
let res2 = await compareDates('2024/01/01', '2024/01/31', './set_b.json');

console.log('\nset_a: ', res1);
console.log('\nset_b: ', res2);
