
export default (strings:string, reference:string) : boolean=>{
    let patten = `^(.*${reference}.*)`;
    let reg = new RegExp(patten);
    return reg.test(strings);
}