function solve(str) {
    let total = 0
    let specialized = 0
    let average = 0
    let clumsy = 0
    for (const strElement of str) {
        let input = strElement.split(' : ').filter(a=>a!=='')
        let prof = input[0]
        let money = Number(input[1])



        if(prof==='Programming' || prof==='Hardware maintenance'|| prof==='Cooking'|| prof=='Translating'||prof==='Designing'){

            if(money>=200){
                specialized++
                if(specialized%2===0){
                    total+=money*0.8
                    total +=200

                }
                else {
                    total+=money*0.8

                }
            }
        }
        else if(prof==='Driving' || prof==='Managing' || prof==='Fishing' || prof==='Gardening'){
            average++
            total+=money
        }
        else if(prof==='Singing'||prof==='Accounting'||prof==='Teaching'||prof==='Exam-Making'||
        prof==='Acting' || prof==='Writing'|| prof==='Lecturing'|| prof==='Modeling'||prof==='Nursing'){
            clumsy++
            if(clumsy%2===0){
                total+=money*0.95
                clumsy==0
            }
            else if(clumsy%3===0){
                total += money*0.9
                clumsy ==0

            }

        }
    }

    console.log(`Final sum: ${total.toFixed(2)}`);
    if(total<1000){
        let razl = 1000-total
        console.log(`Mariyka need to earn ${razl.toFixed(2)} gold more to continue in the next task.`)
    }
    else{
        console.log(`Mariyka earned ${(total-1000).toFixed(2)} gold more.`)
    }

}
solve(['Programming : 500', 'Driving : 243.55', 'Acting : 200',
'Singing : 100', 'Cooking : 199', 'Hardware maintenance : 800', 'Gardening : 700', 'Programming : 500'])