$(function () {
    let nameProductInput = $('.custom-select');
    let price = $('#price');
    let quantity = $('#quantity');
    let inventory = $('.display');
    let capacity = $('#capacity');
    let currentCapacity = 0;

    nameProductInput.keyup(function () {
        if(nameProductInput.val() !== '')
            $('#submit').prop('disabled',false)
    })

    $('#submit').on('click',function () {

        let li = $('<li>').text(`Product: ${nameProductInput.val()} Price: ${price.val()} Quantity: ${quantity.val()}`)
        inventory.append(li)

        currentCapacity += Number(quantity.val());
        nameProductInput.val('')
        price.val('1')
        quantity.val('1')

        capacity.val(currentCapacity)
        if(currentCapacity >= 150){
            capacity.addClass('fullCapacity')
            capacity.val('full')
            $('#submit').attr('disabled',true);
            nameProductInput.attr('disabled',true)
            price.attr('disabled',true)
            quantity.attr('disabled',true)
        }
    })




})