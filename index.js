import {getRelativeJson} from "./sourceJSON.js";

/*function compareDates(target, defaultStart, defaultEnd){
    let result =[];
    for(let [startDateB, endDateB] of target ){
        if(defaultStart <= endDateB && defaultEnd >= startDateB){
            if(defaultStart>=startDateB)
                startDateB = defaultStart;
            if(defaultEnd<=endDateB)
                endDateB = defaultEnd;
            result.push([startDateB, endDateB]);

        }
    }
    return result;



}*/

function compareDates(first, second){
    let result = [];
    for(let [defaultStart, defaultEnd] of first){
        for(let [startDateB, endDateB] of second){
            if(defaultStart <= endDateB && defaultEnd >= startDateB){
                if(defaultStart>=startDateB)
                    startDateB = defaultStart;
                if(defaultEnd<=endDateB)
                    endDateB = defaultEnd;
                result.push([startDateB, endDateB]);
            }
        }
    }
    return result;
}

/*async function compareSets(first_Set, second_Set){
    let result = [];
    first_Set = await getRelativeJson(first_Set);
    second_Set = await getRelativeJson(second_Set);
    for(let [startDate, endDate] of first_Set.dates){
        let temp = compareDates(startDate, endDate, second_Set);
        result.push(temp);
    }
    console.log(`resulting set : `, result);
    return result;


}*/

/*function getDateOverlap(startDateA, endDateA, startDateB, endDateB){
    let result = [];



    return result;
}*/

async function readJson(list){
    let result = [];
    for(let item of list){
        let data = await getRelativeJson(item);
        result.push(data.dates);
    }
    return result;
}
/*function dataCleanup(defaultStart, defaultEnd, target){
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
}*/

function listComparison(list){
    let index = 0;
    let result = compareDates(list[index], list[index+1]);
    index+=2;
    while (index < list.length){
        result = compareDates(result, list[index]);
        index+=1;
    }
    return result;
    /*while (index < list.length-1){
        let curr = result;
        index++;
        for(let [startDate, endDate] of curr) {
            let temp = await compareDates(startDate, endDate, list[index], result);
            result.push(temp);
        }

    }


    if index is 0
    compareDates( first st second set)-> save result
    index ++
    while index<=list.length -1
    compareDates(result with list[index])
    index++*/
}

/*let list = ['./dates1.json', './dates2.json', './dates3.json'];
let res1 = await compareDates('2024/01/01', '2024/01/31', './set_a.json');
let res2 = await compareDates('2024/01/01', '2024/01/31', './set_b.json');

console.log('\nset_a: ', res1);
console.log('\nset_b: ', res2);

let res = await compareSets('./set_a.json', './set_b.json');
let cleaned = dataCleanup('2024/01/01', '2024/01/31', res);

console.log('compareSets result :', res);

console.log("clean data: ", cleaned);*/

let files = ['./set_f.json', './set_g.json', './default_dates.json'];
let list = await readJson(files);
let res = listComparison(list);
console.log(res);

let data = new Map();
data.set('tables',['./set_e.json', './set_.json', './default_dates.json']);
data.set('fields',[['amount','job_description', 'pay_grade'],['status']]);




