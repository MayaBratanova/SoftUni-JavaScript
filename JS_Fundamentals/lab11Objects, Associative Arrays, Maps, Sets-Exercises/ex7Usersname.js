function usersName(arr) {
    let answer = new Set()
    for (const argument of arr) {
        answer.add(argument)
    }
    function sort(a,b) {
        if(a.length<b.length) return -1
        if(a.length>b.length) return 1
        return a.localeCompare(b)

    }
    let sortedAnswer = [...answer].sort(sort)
    console.log([...sortedAnswer].join('\n'));
}
usersName(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston'])