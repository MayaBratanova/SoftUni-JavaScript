function printDeckOfCards(arr){
    function makeCard(face, suit) {
        let faceCorrect = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        let suitCorrect = ['S', 'H', 'D', 'C']
        if(!faceCorrect.includes(face)){
            throw new Error("The card`s face is not valid: " + face)
        }
        if(!suitCorrect.includes(suit)){
            throw new Error("The card`s suit is not valid: " + suit)
        }
        let card = {
            face: face,
            suit: suit,
            toString: function () {
                let colorCard = {
                    'S': '\u2660',
                    'H': '\u2665',
                    'D': '\u2666',
                    'C':'\u2663'
                }

                return card.face + colorCard[card.suit]
            }
        }
        return card
    }
    let deck = []
    let face = ''
    let suit = ''
    for (const elArr of arr) {
        suit = elArr[elArr.length-1]
        face = elArr.substring(0,elArr.length-1)
        try {
            deck.push(makeCard(face, suit))
        }
        catch (err) {
            console.log("Invalid card: " + `${elArr}`);
            return
        }
    }

    console.log(deck.join(' '));
}
printDeckOfCards(['1S', '10D', 'KH', '2C']);