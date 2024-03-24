const log = (...param) => console.log(...param);
const arr = [3, 5, 6, 8, 9];
log(".............FOR EACH...........");
// (value index acc arry)
// for each iteartes into an existing arry

arr.forEach((value, index, accarr) =>{
    log(`
    index - ${index}
    value - ${value}
    Acc- Array - ${accarr}
    `);
});

log(`.............MRF............`);
log(`.............MAP............`);
// IT will returen an new array
const mapReturen = arr.map((value, index, accarr) => {
    log(`index - ${index}
    value - ${value}
    Acc- Array - ${accarr}
    `);
    // adding two extra number  to the value 
   return (value +=2)
});







































log(`...............filter...............`);
const filterarr = arr.filter((value, index, accarr) => {
    log(`filter index - ${index}
    filter value - ${value}
    filter- Array - ${accarr}
    `);
    return value % 2 !=0;
});
log(arr);
log(filterarr);



















