import {getRelativeJson} from "./sourceJSON.js";

async function compareDates(defaultStart, defaultEnd, target, result){
    let file = await getRelativeJson(target);
    console.log(file);
    for(let [startDateB, endDateB] of file.dates ){
        //console.log('\n file: ', startDateB, endDateB)
        if(defaultStart <= endDateB && defaultEnd >= startDateB){
            if(defaultStart>=startDateB)
                startDateB = defaultStart;
            if(defaultEnd<=endDateB)
                endDateB = defaultEnd;
            // //console.log(`Default Dates Overlap: `, startDateB, endDateB);
            result.push([startDateB, endDateB]);

        }
    }
    return result;



}
async function compareSets(first_Set, second_Set){
    let result = [];
    first_Set = await getRelativeJson(first_Set);
    for(let [startDate, endDate] of first_Set.dates){
        let temp = await compareDates(startDate, endDate, second_Set, result);
        result.push(temp);
    }
    console.log(`resulting set : `, result);
    return result;


}

function getDateOverlap(startDateA, endDateA, startDateB, endDateB){
    let result = [];



    return result;
}

function dataCleanup(defaultStart, defaultEnd, target){
    let result = [];
    for(let [startDateB, endDateB] of  target){
        //console.log('\n file: ', startDateB, endDateB)
        if(defaultStart <= endDateB && defaultEnd >= startDateB){
            if(defaultStart>=startDateB)
                startDateB = defaultStart;
            if(defaultEnd<=endDateB)
                endDateB = defaultEnd;
            // //console.log(`Default Dates Overlap: `, startDateB, endDateB);
            result.push([startDateB, endDateB]);

        }
    }
    return result;
}

/*let list = ['./dates1.json', './dates2.json', './dates3.json'];
let res1 = await compareDates('2024/01/01', '2024/01/31', './set_a.json');
let res2 = await compareDates('2024/01/01', '2024/01/31', './set_b.json');

console.log('\nset_a: ', res1);
console.log('\nset_b: ', res2);*/

let res = await compareSets('./set_c.json', './set_d.json');
let cleaned = dataCleanup('2024/01/01', '2024/01/31', res);

console.log('compareSets result :', res);

console.log("clean data: ", cleaned);

