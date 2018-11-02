function upperCase(str) {
    console.log(str.toUpperCase().split(/\W+/).filter(w => w !== ' ').join(', '));
}
upperCase("Maya, is the best!")