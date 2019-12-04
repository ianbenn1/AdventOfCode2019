const range_min = 172930
const range_max = 683082

let num_possible = 0;

for (let x = range_min; x <= range_max; x++) {
    let string_num = x + "";
    let never_decreases = true;
    let has_double = false;
    for (let i = 1; i < string_num.length; i++)
    {
        if(parseInt(string_num[i]) == parseInt(string_num[i-1]))
        {
            has_double = true;
        }
        if (!(parseInt(string_num[i]) >= parseInt(string_num[i-1])))
        {
            never_decreases = false;
            break;
        }
    }
    if (never_decreases && has_double)
    {
        num_possible++;
    }
}
console.log(num_possible);