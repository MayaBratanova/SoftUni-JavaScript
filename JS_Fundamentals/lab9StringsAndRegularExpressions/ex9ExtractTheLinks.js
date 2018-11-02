function extractTheLinks(str) {
    let pattern = /\bwww.[A-Za-z-0-9]+\.[a-z]+[\.?[a-z]*]*\b/g
    let arr = []
    for (const strElement of str) {
        arr.push(strElement.match(pattern))
    }
    arr = arr.filter(x=>x!=null)
    console.log(arr.join('\n'));
}
extractTheLinks(['Join WebStars now for free, at www.web-stars.com','You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'])