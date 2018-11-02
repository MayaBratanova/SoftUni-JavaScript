class TitleBar{

    constructor(title){
        this.title = title;
        this.links = []
    }
    addLink(href, name){
        let a = $('<a>').addClass('menu-link')
            .attr('href', href)
            .text(name)
        this.links.push(a)
    }
    appendTo(selector){
        let header = $('<header>').addClass('header')
        let div = $('<div>').addClass('header-row')
        let a = $('<a>')
            .addClass('button')
            .html('&#9776;')
        $(a).on('click',function () {
            $('.drawer').toggle()
        });
        let span = $('<span>').addClass('title').text(this.title)
        let div1 = $('<div>').addClass('drawer')
        let nav= $('<nav>').addClass('menu')


        header.append(div)
        header.append(div1)
        div.append(a)
        div.append(span)
        div1.append(nav)
        nav.append(this.links)

        $(selector).append(header)

    }
}



