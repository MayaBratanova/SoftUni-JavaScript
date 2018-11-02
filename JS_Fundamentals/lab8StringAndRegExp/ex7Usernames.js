function usernames(arr) {
    let firstName = ""
    let letter = ""

    let helper = []
    for (let i = 0; i < arr.length; i++) {
        let splitString = arr[i].split('@')
        firstName = splitString[0]
        let splitLetters = splitString[1].split('.')
        for (let j = 0; j < splitLetters.length; j++) {
            letter += splitLetters[j].substring(0,1)

        }
        helper.push(firstName + "." + letter)
        letter = ""
    }
    console.log(helper.join(", "));

}
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])
//peshoo.gc