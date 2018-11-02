class PaymentManager{
    constructor(title){
        this.title = title
    }
    render(id){

        let table = $('<table>')
        $(id).append(table)
        let caption = $(`<caption>${this.title} Payment Manager</caption>`)
        table.append(caption)
        let thead = $('<thead>')
        table.append(thead)
        let tr = $('<tr>')
        thead.append(tr)
        let thName = $('<th class="name">Name</th>')
        let thCat = $('<th class="category">Category</th>')
        let thPr = $('<th class="price">Price</th>')
        let th = $('<th>Action</th>')
        tr.append(thName).append(thCat).append(thPr).append(th)

    }
}