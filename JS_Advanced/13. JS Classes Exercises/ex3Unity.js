class Rat {
   constructor(name){
       this.name = name
       this.unitesRats = []
   }
   unite(otherRats){
       if(otherRats instanceof Rat){
           this.unitesRats.push(otherRats)
       }
   }
   getRats(){
       return this.unitesRats
   }
   toString(){
       let result = `${this.name} \n`
       for (const el of this.unitesRats) {
           result+= `##${el}`
       }
       return result
   }
}
let test = new Rat('Pesho');
console.log(test.toString()); //Pesho
console.log(test.getRats()); //[]
test.unite(new Rat('Gosho'));
test.unite(new Rat('xxx'));
test.unite(new Rat('Sasho'));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
// Rat { name: 'Sasho', unitedRats: [] } ]
console.log(test.toString());