/*处理express request 头信息中  Accept属性，对不同的内容做出不同的格式相应，
*默认 application/json
*/
module.exports.normal=(data,request,response,next)=>{
    if (data instanceof Error) {
        next(data);
        return;
    }
    handleResponse(data,request,response);
}


module.exports.error = (error, request, response, next) => {
    handleResponse(error, request, response);
}

  //常见几种类型 text/html application/json application/xml
function handleResponse(data, request, response) {
    const accept = request.headers.accept || 'application/json';
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
            let temp = {};
            if (typeof data == 'string' && data.constructor == String) {
                temp.msg = data;
            } else {
                temp = data;
            }
            response.json(temp);
            break;
    }
}
