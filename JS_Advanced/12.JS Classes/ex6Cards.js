let result = (function () {
    class Card {
        get face() {
            return this._face
        }
        set face(value) {
            if(!Faces.includes(value)){
                throw new Error("Invalid card face: " + value)
            }
            this._face = value;
        }
        get suit() {
            return this._suit;
        }
        set suit(value) {
            if(!Object.values(Suits).includes(value)){
                throw new Error ("Invalid card suite: " + suit)
            }
            this._suit = value;
        }
        toString(){
            return `${this.face}${this.suit}`
        }
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }
    }
    let Suits = {
        CLUBS: "\u2663",
        DIAMONDS: "\u2666",
        HEARTS: "\u2665",
        SPADES: "\u2660"
    }
    let Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    return{Suits, Card}
})()
let Card = result.Card
let Suits = result.Suits

let card = new Card("Q", Suits.CLUBS)
console.log(card.face);
console.log(card.suit);
console.log(card.toString());
console.log(card);
card.face = "A"
card.suit = Suits.DIAMONDS
console.log(card);
let card1 = new Card("-1", Suits.Maya)
console.log(card1);