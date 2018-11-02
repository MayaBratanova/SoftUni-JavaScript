function solve(arr) {
    let patternMethod = /^Method: ([PUT|DELETE|POST|GET]+)$/
    let patternCredentials = /^Credentials: (([Bearer|Basic]+) ([a-zA-Z0-9]{1,}))$/
    let patternContent = /^Content: ([a-zA-Z0-9\.]+)$/
    let patternCheker = /([0-9])([a-z])/
    let auth = ''
    let method = ''
    let credentials = ''
    let content = ''
    let checer = false
    let bearOrBasic = ''
    let validAuth = false
    let hash = arr.pop()
    let arrHash = []

    for (let i = 0; i < arr.length-1; i += 3) {
        if (patternMethod.test(arr[i])) {
            let match = patternMethod.exec(arr[i])
            method = match[1]
            checer = true
        }
        else {
            console.log('Response-Code:400');
            checer = false
            continue
        }
        if (patternCredentials.test(arr[i + 1])) {
            let match = patternCredentials.exec(arr[i + 1])
            credentials = match[3]
            bearOrBasic = match[2]
            auth = match[1]
            checer = true
        }
        else {
            console.log(`Response-Method:${method}&Code:403`);
            checer = false
            continue
        }
        if (bearOrBasic == 'Basic' && (method == 'PUT' || method == 'DELETE' || method == 'POST')) {
            console.log(`Response-Method:${method}&Code:401`);
            checer = false
            continue
        }


        if (patternContent.test(arr[i + 2])) {
            let match = patternContent.exec(arr[i + 2])
            content = match[1]
            checer = true
        }
        else {
            console.log('Response-Code:400');
            checer = false
            continue
        }


        if (patternCheker.test(hash)) {
            for (let j = 0; j < hash.length; j+=2) {
                arrHash.push(hash.substr(j,2))
            }
            for (let j = 0; j < arrHash.length; j++) {
                let count = patternCheker.exec(arrHash[j])[1]
                let char = patternCheker.exec(arrHash[j])[2]

                let splittedAuth = credentials.split(char);
                // console.log(splittedAuth);
                if(splittedAuth.length - 1 == count){
                    validAuth = true;
                }


            }

        }
        if(!validAuth){

                console.log(`Response–Method:${method}&Code:403`);

        }
        if (checer == true) {
            console.log(`Response-Method:${method}&Code:200&Header:${credentials}`);
        }
    }

}

solve(['Method: PUT', 'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd/1782452$278///**asd123', 'Method: POST', 'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
    'Content: Johnathan', 'Method: DELETE', 'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
    'Content: This.is.a.sample.content', '2e5g'])