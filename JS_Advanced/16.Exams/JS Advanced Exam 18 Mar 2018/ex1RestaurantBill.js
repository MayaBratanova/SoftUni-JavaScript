function addProduct() {
    let inputProduct = $('#add-product input:first')
    let inputPrice = $('#add-product input:eq(1)')
    let tr = $('<tr>')
    let tdProduct = $('<td>')
    let tdPrice = $('<td>')
    if(inputProduct.val() !== '' && inputPrice.val() !== ''){
        tdProduct.text(inputProduct.val())
        tdPrice.text(inputPrice.val())
        tr.append(tdProduct).append(tdPrice)
        $('#product-list').append(tr)
        let total = $('tfoot tr td:eq(1)')
        let totalText = Number($(total).text())
        totalText+=Number($(inputPrice).val())
        total.text(totalText)

    }
    inputProduct.val('')
    inputPrice.val('')

}