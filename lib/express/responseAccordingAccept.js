/*处理express request 头信息中  Accept属性，对不同的内容做出不同的格式相应，
*默认 application/json
*/
module.exports=(data,request,response,next)=>{
    if (data instanceof Error) {
        response.status(data.status || data.statusCode || 500);
    }
    const accept = request.headers.accept || 'application/json';
    //常见几种类型 text/html application/json application/xml
    switch (accept) {
        case 'text/html':
            //返回字符串
            data = JSON.stringify(data);
            response.send(`<h3>${data}</h3>`);
            break;
        case 'text/plain':
            //返回字符串
            data = JSON.stringify(data);
            response.send(data);
            break;
        default://返回json
            let temp={};
            if (typeof data == 'string' && data.constructor == String) {
                temp.msg=data;
            }else{
                temp=data;
            }
            response.json(temp);
            break;
    }
}