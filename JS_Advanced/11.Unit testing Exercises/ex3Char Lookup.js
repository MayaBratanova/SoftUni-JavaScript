function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);


}
let answer = lookupChar('Maya', 4)
console.log(answer);

module.exports = {lookupChar}