function palindrome(word) {
    let bool = false
    for (let i = 0; i < word.length/2; i++) {
        if(word[i]==word[word.length-1-i]){
            bool = true
        }
        else{
            bool = false
            break
        }

    }
    if(bool==true){
        return 'true'
    }
    else{
        return 'false'
    }

}
console.log(palindrome('abba'));