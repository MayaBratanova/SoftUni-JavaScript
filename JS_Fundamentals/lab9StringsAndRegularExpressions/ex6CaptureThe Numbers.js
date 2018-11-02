function captureTheNumbers(arr) {
    let pattern = /\d+/g
    let dates = []
    for (const arrElement of arr) {
        let helper = arrElement.match(pattern)
        if(arrElement.match(pattern)){
            if(helper.length>1){
                for (const h of helper) {
                    dates.push(h)
                }
            }else{
                dates.push(arrElement.match(pattern))
            }

        }
        else{
            continue
        }

    }
    console.log(dates.join(" "));
}
captureTheNumbers(['The300','Maya is the best', 'Time is 22:45'])