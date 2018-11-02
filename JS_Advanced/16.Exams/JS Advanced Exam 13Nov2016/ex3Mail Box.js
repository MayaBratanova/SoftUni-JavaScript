class MailBox {
    constructor(){
        this.mail = []
    }
    addMessage(subject, text){
        if(typeof subject === 'string' && typeof text ==='string'){
            return this.mail.push({subject: subject, text: text})
        }
    }
    get messageCount(){
        return this.mail.length
    }
    deleteAllMessages(){
        return this.mail = []
    }
    findBySubject(substr){
        let newArr = []
        for (const el of this.mail) {
            if(el.subject.includes(substr)){
                newArr.push(el)
            }
        }
        return newArr
    }
    toString(){
        if(this.mail.length===0){
            return '* (empty mailbox)'
        }
        else{
            let str = ''
            for (const el of this.mail) {
                str+= `* [${el.subject}] ${el.text}\n`
            }
            return str
        }
    }

}
let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
console.log(mb);


