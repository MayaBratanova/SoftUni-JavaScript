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
let person = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com')
console.log(person);
console.log(person.toString());

//Maria Petrova (age: 22, email: mp@yahoo.com)