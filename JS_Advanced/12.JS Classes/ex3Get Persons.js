function getPerson() {
    class Person{
        constructor(firstName, lasName, age, email){
            this.firstName = firstName
            this.lastName = lasName
            this.age = age
            this.email = email
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    return[
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com')
    ]

}
let answer = getPerson()
console.log(answer.join(', '));



