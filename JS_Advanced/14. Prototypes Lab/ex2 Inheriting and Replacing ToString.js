//function solve() {
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

    //return {
    //    Person,
    //    Teacher,
    //    Student
    //}
////}
//let Person = solve.Person
//let Teacher = solve.Teacher
//let Student = solve.Student
let person = new Person("maya", "m_@abv.bg")
let teacher = new Teacher('ico', 'ico@abv.bg', 'history')
let student = new Student('pico', 'pico@abv.bg', 'nesto')
console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());
console.log(Object.getPrototypeOf(teacher))
console.log(Object.getPrototypeOf(Teacher))
console.log(Object.getPrototypeOf(Person))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Person)))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Person))))