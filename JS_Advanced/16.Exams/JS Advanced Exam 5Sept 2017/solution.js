class Dialog{
    constructor(message, callback) {
        this.message = message;
        this.callback = callback;
        this.data = [];
    }

    addInput(label, name, type){
        this.data.push({label, name, type})
    }

    render(){
        let outerDiv =$('<div>').addClass('overlay');
        let divDialog = $('<div>').addClass('dialog');
        divDialog.append($(`<p>${this.message}</p>`));
        for (let obj of this.data) {
            divDialog.append($(`<label>${obj.label}</label>`));
            divDialog.append($(`<input name="${obj.name}" type="${obj.type}">`));
        }
        divDialog.append($('<button>OK</button>').click(this._ok.bind(this)));
        divDialog.append($('<button>Cancel</button>').click(this._cancel));
        outerDiv.append(divDialog);
        $('body').append(outerDiv)
    }

    _cancel(){
        $('.overlay').remove();
    }

    _ok(){
        let obj = {};
        let data = $('.dialog > input').toArray();
        data.forEach(el => obj[$(el).attr('name')] = $(el).val());
        this.callback(obj);
        this._cancel()
    }
}