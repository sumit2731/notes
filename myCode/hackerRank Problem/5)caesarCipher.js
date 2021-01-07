function caesarCipher(s, k) {
    
    function convert(start,end ,number) {
        if(number <= end) return number;
        else return (start + (number-end) -1);
    }
     k = k% 26;
    return s.split("").map(char => {
        let charCode = char.charCodeAt(0);
        if(charCode >= 97 && charCode <=122) return String.fromCharCode(convert(97,122,charCode+k));
        else if(charCode >= 65 && charCode <=90) return String.fromCharCode(convert(65,90,charCode+k));
        else return char;
    }).join("");
}
console.log(caesarCipher("www.abc.xy", 87));