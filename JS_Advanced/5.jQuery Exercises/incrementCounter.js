function increment(selector) {
    let textArea = $('<textarea>');
    textArea.addClass('counter');
    textArea.val("0");
    textArea.attr("disabled", "true");
    $(selector).append(textArea);
    $(selector).append('<button class="btn" id="incrementBtn">Increment</button>');
    $(selector).append('<button class="btn" id="addBtn">Add</button>');
    $(selector).append('<ul class="results">');

    let input = $('.counter').val();
    $('#incrementBtn').on('click',function () {
        input++;
        $('.counter').val(input)

    });
    $('#addBtn').on('click', function () {
        $('.results').append(`<li>${input}</li>`);
        input = 0
        $('.counter').val(input)
    })
}