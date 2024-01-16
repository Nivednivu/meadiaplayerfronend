import axios from "axios"

export const commonAPI = async (httpMethods,url,reqBody)=>{
    let reqconfig ={
        method: httpMethods,
        url: url,
        data: reqBody,
        Headers:{
            "Content-Type": "application/json"
        }
}
return await axios(reqconfig).then((result)=>{
    return result
})
.catch((err)=>{
    return err
})
}