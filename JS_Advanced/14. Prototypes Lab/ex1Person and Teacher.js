function personAndTeacherClasses(){
    class Person {
        constructor(name, email){
            this.name = name
            this.email = email
        }

    }
    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email)
            this.subject = subject
        }
    }
    return {
        Person,
        Teacher
    }


let person = new Person('Maya', 'm_brat@yahoo.com')
console.log("Person: " + person.name + person.email);
let teacher = new Teacher('ico', 'mkf@hfh.bn', 'chemistry')
console.log(teacher);