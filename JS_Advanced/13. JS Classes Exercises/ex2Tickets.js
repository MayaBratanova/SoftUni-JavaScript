function solve(arr, str) {
    let sumTicket = []
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }
    for (const el of arr) {
        let[destination, price, status] = el.split('|')
        let ticket = new Ticket(destination, price, status)
        sumTicket.push(ticket)
    }
    if(str==='destination'){
        sumTicket.sort((a,b)=>a.destination.localeCompare(b.destination))
    }
    else if(str==='price'){
        sumTicket.sort((a,b)=>a.price-b.price)
    }
    else if(str==='status'){
        sumTicket.sort((a,b)=>a.status.localeCompare(b.status))
    }

    return sumTicket
}
let result = solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination')
console.log(result);