 class Repository {

        constructor(props) {
            this.props = props
            this.data = new Map()
            this._id = 0
        }

        add(entity) {
            let result = this.checkParam(entity)
            if (result) {
                this.data.set(this._id,entity)
                return this._id++
            }
        }

        checkParam(entity){
            let keys = Object.keys(this.props)
            let values = Object.values(this.props)
            let keysNew = Object.keys(entity)

            let valueNew = Object.values(entity)
            valueNew = valueNew.map(m => typeof m)
            if (JSON.stringify(keys) === JSON.stringify(keysNew) && JSON.stringify(values) === JSON.stringify(valueNew)) {
                return true
            }
            else {
                for (let i = 0; i < keys.length; i++) {
                    if (keys[i] !== keysNew[i]) {
                        throw new Error(`Property ${keys[i]} is missing from the entity!`)
                    }
                }
                for (let i = 0; i < values.length; i++) {
                    if (values[i] !== valueNew[i]) {
                        throw new Error(`Property ${values[i]} is of incorrect type!`)
                    }
                }

            }
        }

        get(id) {
            if(id<0 || id>=this.data.size){
                throw new Error(`Entity with id: ${id} does not exist!`)
            }
            else{
                return this.data.get(id)
            }

        }
        update(id, newEntity) {
            let result = this.checkParam(newEntity)
            if(result){
                this.data.set(id,newEntity)
            }
        }

        del(id) {
            if(id<0 || id>=this.data.size){
                throw new Error(`Entity with id: ${id} does not exist!`)
            }
            else{
                this.data.delete(id)
            }
        }

        get count() {
            return this.data.size
        }
    }


// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity);
//console.log(repository);// Returns 0
repository.add(entity);
//console.log(repository);// Returns 1
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0);
console.log(repository.count); // Returns 1
let anotherEntity = {
    name1: 'Nakov',
    age: 26,
    birthday: new Date(1991, 0, 21)
};
repository.add(anotherEntity); // should throw an Error
anotherEntity = {
    name: 'Nakov',
    age: 26,
    birthday: 1991
};
repository.add(anotherEntity); // should throw a TypeError
repository.del(-1); // should throw Error for invalid id


