import { Request, Response, NextFunction} from 'express';

/*处理express request 头信息中  Accept属性，对不同的内容做出不同的格式相应，
*默认 application/json
*/
export default function viii (data:any,request:Request,response:Response,next:NextFunction):void{
    if (data instanceof Error) {
        next(data);
        return;
    }
    const accept = request.headers.accept || 'application/json';
    //常见几种类型 text/html application/json application/xml
    switch (accept) {
        case 'text/html':
            //返回字符串
            if ((typeof data == 'object') && data.constructor == Array) {
                data=data.toString();
            } else if (!(typeof data == 'string' && data.constructor == String)){
                data = JSON.stringify(data);
            }
            response.send(data);
            break;
    
        default://返回json
            let temp:any;
            if (typeof data == 'string' && data.constructor == String) {
                temp.msg=data;
            }else{
                temp=data;
            }
            response.json(temp);
            break;
    }
}