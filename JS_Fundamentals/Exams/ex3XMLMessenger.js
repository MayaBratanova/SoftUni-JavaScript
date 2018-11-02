function solve(str) {
    let answer = []
    let text = ''
    let pattern1 = /^<message[\s\S]+?>[\s\S]+?<\/message>$/
    let pattern3 = /^<message((\s+([a-z]{1,})?="([a-zA-Z0-9\. ]{1,})?"))+\>((.|\n)+?)<\/message>$/
    if(pattern1.test(str)){
        let pattern2 = /((\s+([a-z]{1,})?="([a-zA-Z0-9\. ]{1,})?"))+?/g
        let match = []

        let obj = {}
        while(match = pattern2.exec(str)) {
            let sender = match[3]
            let name = match[4]
            if(sender == 'to'){
                obj = {'to': name}
                answer.push(obj)
            }
            else if(sender=='from') {
                obj = {'from': name}
                answer.push(obj)
            }
        }
        if(answer.length<2){
            console.log('Missing attributes');

        }
        else {
            text = pattern3.exec(str)[5]
            let from = ''
            let to = ''
            for (const argument of answer) {
                if (Object.keys(argument) == 'from') {
                    from = argument['from']
                }
                else if (Object.keys(argument) == 'to') {
                    to = argument['to']
                }


            }

            text = text.replace(/\n/g, '</p>\n    <p>')
            // console.log(from);
            // console.log(to);
            console.log(`<article>
  <div>From: <span class="sender">${from}</span></div>
  <div>To: <span class="recipient">${to}</span></div>
  <div>
    <p>${text}</p>
  </div>
</article>
`);
        }

    }
    else{
        console.log('Invalid message format');
    }
   // console.log(answer);


}
solve('<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old\n' +
    'Let\'s go out for a beer</message>')