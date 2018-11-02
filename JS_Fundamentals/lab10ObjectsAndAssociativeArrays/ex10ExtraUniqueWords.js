function extraUniqueWords(arr) {
    let words = new Set()
    for (const el of arr) {
        let input = el.toLowerCase().split(/[\W+]/).filter(x=>x!=='')
        for (const string of input) {
            words.add(string)
        }
    }

        console.log([...words.values()].join(', '));
}
extraUniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.'])