import { PublicAxios,PrivateAxios } from "../config/AxiosConfig"
const registerUser=(data)=>{
    return PublicAxios.post("/user/signup",data);
}

const loginUser=(data)=>{
    return PublicAxios.post("/user/login",data);
}

const getEmailForForgotPassword=(email)=>{
    return PublicAxios.post("/user/forgot",email);
}

const resetPassword=(data)=>{
    return PublicAxios.post("/user/reset-password",data);
}

const updatePassword=(data)=>{
    return PrivateAxios.post("/user/update-password",data);
}



export {registerUser,loginUser,getEmailForForgotPassword,resetPassword,updatePassword}