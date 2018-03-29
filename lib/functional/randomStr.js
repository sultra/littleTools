
module.exports = generateStr;



function generateNum(min, max) {
    let range = max - min;
    let r = Math.random();
    return min + Math.round(r * range);
}

function generateStr(length) {
    let str='';
    for (let i = 0; i < length; i++) {
        let t=generateNum(0,1);
        if (t>0) {
            str += String.fromCharCode(generateNum(97, 122));
        }else{
            str += generateNum(0, 9);
        }
    }
    return str;
}