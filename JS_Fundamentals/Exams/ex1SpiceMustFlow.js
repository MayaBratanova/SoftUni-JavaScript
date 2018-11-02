function solve(arr) {
    let num = Number(arr[0])
    let total = 0
    let day = 0
    if(num<100)
    {
        console.log(0);
        console.log(0);
    }

    else{
        while(num>=100){
            day++
            total += num-26
            num = num-10
        }
        total = total-26
        console.log(day);
        console.log(total);
    }

}
solve(['99'])