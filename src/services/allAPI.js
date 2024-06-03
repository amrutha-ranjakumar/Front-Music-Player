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

//3)profile add
export const profileAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("post",`${BASE_URL}/profile/add`,reqBody,reqHeader)
}

//4) get all music
export const AllMusicAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/music/all-music?search=${searchKey}`,"",reqHeader)

}
//5) get center music (4 items)
// export const centerMusicApi = async()=>{
//     return await commonAPI("get",`${BASE_URL}/music/center-music`,'','')
// }


//5)get user profile
export const  userprofileAPI = async(reqHeader)=>{
    return await commonAPI("get",`${BASE_URL}/profile/user-profile`,'',reqHeader)

}

//5)get song details
// export const  songDetailsApi = async(reqHeader)=>{
//     return await commonAPI("get",`${BASE_URL}/songdetails/get`,'',reqHeader)

// }

//4) get all Artist
// export const getAllDetailsApi = async(reqHeader)=>{
//     return await commonAPI("get",`${BASE_URL}/songdetails/get`,'',reqHeader)

// }



