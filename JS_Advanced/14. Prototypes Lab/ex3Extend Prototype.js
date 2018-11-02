
class Person {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    toString() {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email)
        this.subject = subject
    }

    toString() {
        let base = super.toString().slice(0,-1)
        return `${base} , subject: ${this.subject})`
    }
}

class Student extends Person {
    constructor(name, email, course) {
        super(name, email)
        this.course = course
    }

    toString() {
        let base = super.toString().slice(0,-1)
        return `${base} , course: ${this.course})`
    }
}
function extendPrototype(baseClass) {
    baseClass.prototype.species = "Human"
    baseClass.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}
extendPrototype(Person)
let person = new Person("maya", "m_@abv.bg")
let teacher = new Teacher('ico', 'ico@abv.bg', 'history')
let student = new Student('pico', 'pico@abv.bg', 'nesto')
Person.prototype.species = 'Maya'
console.log(person.toStringSpecies());
console.log(teacher.toStringSpecies());
console.log(student.toStringSpecies());

