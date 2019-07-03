import Axios from "axios";
import { resolve } from "url";
export default function ajax(url,data={},type="GET"){
    return new Promise(function(resolve,reject){    
    let promise
    if(type==='GET'){
        
        //准备参数
        let dataStr="";//拼接字符串
        Object.keys(data).forEach(key=>{
            dataStr += key +'='+data[key]+'&'
        });
        if(dataStr!==''){
            dataStr=dataStr.substr(0,dataStr.lastIndexOf('&'));
            url =url +'?'+dataStr;
        }
        
        promise=Axios.get(url);
    }else{
        promise =Axios.post(url,data);
    }
    promise.then(response=>{
        resolve(response.data)
    }).catch(error=>{
        reject(error)
    })
})
}