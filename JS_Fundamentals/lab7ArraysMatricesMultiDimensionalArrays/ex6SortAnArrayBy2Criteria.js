function sortByTwoCriteria(arr) {

    arr.sort().sort((a,b)=>(a.length-b.length))
    console.log(arr.join('\n'));

}
sortByTwoCriteria(['gamma', 'beta', 'alpha']);