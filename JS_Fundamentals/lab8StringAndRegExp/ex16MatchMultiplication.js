function matchMultiplication(str) {
    let pattern = /\b(\-?[0-9]+)\s*\*\s*(\-?[0-9]+\.?[0-9]*)\b/g
    str = str.replace(pattern,(match, a,b)=>a*b)
    console.log(str);


}
matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).')