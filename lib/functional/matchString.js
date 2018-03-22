/**
 * 模糊匹配字符串 匹配的上则返回true
 * @param {string} strings 待匹配的字符串
 * @param {string} reference 要匹配的参考字符串
 * @returns boolean
 */
function matchString(strings, reference) {
    let patten = `^(.*${reference}.*)`;
    let reg = new RegExp(patten);
    return reg.test(strings);
}

module.exports = matchString;