function solve() {
    class Balloon {
        constructor(color, gasWeight){
            this.color = color
            this.gasWeight = Number(gasWeight)
        }
    }
    class PartyBalloon extends Balloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength){
            super(color, gasWeight);
            this._ribbon = {color:ribbonColor, length:ribbonLength};
        }

        get ribbon(){
            return this._ribbon
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength, text){
            super(color, gasWeight, ribbonColor, ribbonLength)
            this._text = text;
        }
        get text() {
            return this._text;
        }
    }
    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon,
    }
}
let classes = solve();

let partyBalloon = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
let ribb = partyBalloon.ribbon('blue', 15);
console.log(ribb)
console.log(test);