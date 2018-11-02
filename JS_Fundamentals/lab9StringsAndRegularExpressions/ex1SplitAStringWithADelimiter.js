function split(str, delimeter) {
    let arr = str.split(`${delimeter}`)
    console.log(arr.join("\n"));
}
split('One-Two-Three-Four-Five', '-')