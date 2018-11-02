class CheckingAccount {
    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        let pattern = /^[0-9]{6}$/
        if (pattern.test(value)) {
            this._clientId = value;
        }
        else {
            throw new TypeError("Client ID must be a 6-digit number")
        }

    }

    get email() {
        return this._email;
    }

    set email(value) {
        let pattern = /^[a-zA-Z0-9]{1,}@[a-z.]+$/
        if (pattern.test(value)) {
            this._email = value;
        }
        else {
            throw new TypeError("Invalid e-mail")
        }

    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        let patternLength = /^.{3,20}$/
        let patternLetter = /^[a-zA-Z]{3,20}$/
        if (patternLength.test(value)) {
            if (patternLetter.test(value)) {
                this._firstName = value;
            }
            else {
                throw new TypeError("First name must contain only Latin characters")
            }
        }
        else {
            throw new TypeError("First name must be between 3 and 20 characters long")
        }
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        let patternLength = /^.{3,20}$/
        let patternLetter = /^[a-zA-Z]{3,20}$/
        if (patternLength.test(value)) {
            if (patternLetter.test(value)) {
                this._lastName = value;
            }
            else {
                throw new TypeError("Last name must contain only Latin characters")

            }
        }
        else {
            throw new TypeError("Last name must be between 3 and 20 characters long")
        }
    }

    constructor(clientId, email, firstName, lastName) {
        this.products = []
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

let acc = new CheckingAccount('4234145', 'petkan@another.co.uk', 'Petkan', 'Draganov')
console.log(acc.clientId);