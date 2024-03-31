import { commonAPI } from "./commonAPI";

import { BASE_URL } from "./baseurl";

//1)register user
export const registerAPI = async(user)=>{
    return await commonAPI("post",`${BASE_URL}/user/register`,user,"")
}
//2)login user
export const loginAPI = async(reqBody)=>{
    return await commonAPI("post",`${BASE_URL}/user/login`,reqBody,"")
}

//3) get all music
export const AllMusicAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/music/all-music?search=${searchKey}`,"",reqHeader)

}


