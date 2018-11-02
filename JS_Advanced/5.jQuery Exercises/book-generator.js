function createBook(selector, title, author, isbn) {
    let div = $('<div>');
    let i = 0;
    i++;
    let idNumber = 'book'+ i;
    div.attr("id", `book${i}`);
    $(div).attr('style', "border:none;");
    div.append($(`<p class="title">${title}</p>`))
        .append($(`<p class="author">${author}</p>`))
        .append($(`<p class="isbn">${isbn}</p>`));

        let selectBtn = $('<button>Select</button>').on('click', function () {
            $(div).attr('style', "border:2px solid blue;")
        });
        let deselectBtn = $('<button>Deselect</button>').on('click', function () {
            $(div).attr('style', "border:none;")
        });


    $(div).append(selectBtn);
    $(div).append(deselectBtn);
    $(selector).append(div);
}