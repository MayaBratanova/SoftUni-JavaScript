class Request{
    constructor(method, uri, version, message,response,fulfilled){
        this.method = method
        this.uri = uri
        this.version = version
        this.message = message
        this.response = undefined
        this.fulfilled = false
    }

}
let answer = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(answer);