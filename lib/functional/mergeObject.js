/**
 * 将源对象中的属性合并到目标对象中，实现如果存在目标中属性的自属性不在源中，不会被源对象的属性完全覆盖
 * @param {obj} target 目标对象
 * @param {[obj]} sources 源对象
 */
function mergeObject(target, ...sources) {
    sources.forEach(source => {
        //
        for (const nodeName in source) {
            //源对象有，目标对象没有该属性，直接赋值给目标
            if (target[nodeName] == undefined) {
                target[nodeName] = source[nodeName];
            } else {
                const node = source[nodeName];
                const tarNode = target[nodeName];
                //双方都有该属性，并且是对象时，再逐渐对比内部属否有相同
                if (tarNode.constructor === Object && node.constructor === Object) {
                    mergeObject(target[nodeName], node);
                } else {
                    target[nodeName] = source[nodeName];
                }
            }
        }
    });
}

module.exports = mergeObject;