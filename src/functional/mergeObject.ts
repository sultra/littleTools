
export default function mergeObject(target:any, ...sources:any[]):void {
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
