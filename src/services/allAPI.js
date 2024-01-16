import { commonAPI } from "./CommonApi"
import { serverURL } from "./Services"

// upload video
export const uploadvideo = async (reqBody)=>{
   return await commonAPI ('post',`${serverURL}/video`,reqBody)
}
export const getvideos = async ()=>{
  return await commonAPI ('get',`${serverURL}/video`,"")
}

// to delete a video
export const deletevideo =async (id)=>{
 return   await commonAPI ('delete',`${serverURL}/video/${id}`,{})
}

// add history
export const addhistory= async(videoDetails)=>{
 return await commonAPI ('post',`${serverURL}/history/`,videoDetails)
}

// all to history from json server
export const getAllhistory =  async () =>{
 return await commonAPI  ('get',`${serverURL}/history/`,"")
}

// api call to delete history
export const deletevideohistory = async (id) =>{
 return await commonAPI ('delete',`${serverURL}/history/${id}`,{})
}

// add category
 export const addcategory = async (body)=>{
 return  await commonAPI ('post',`${serverURL}/category/`,body)
 }

//  get to all category to json server
export const getAllcategory = async ()=>{
 return await commonAPI ('get',`${serverURL}/category/`,"")
}
// delete category
export const getdeletecategoty = async (id)=>{ 
return  await commonAPI ('delete',`${serverURL}/category/${id}`,{})
}

// api to get a particular video from
 
export const getAvideo = async (id)=>{
 return  await commonAPI ('get',`${serverURL}/video/${id}`,"")
}

// api to add the category
export const updatecategory = async (id,body)=>{
 return await commonAPI('put',`${serverURL}/category/${id}`,body)
}