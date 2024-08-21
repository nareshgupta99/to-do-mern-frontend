import axios from 'axios';

const baseURL="http://localhost:8080/api/v1"

const PublicAxios = axios.create({
    baseURL: baseURL,
});

const PrivateAxios = axios.create({
    baseURL: baseURL,
    
});

// PrivateAxios
PrivateAxios.interceptors.request.use(config=>{
    const token=localStorage.getItem("token");
    if(token){
        config.headers.Authorization=`Bearer ${token}`
        return config;
    }

    return config;
 },err=>Promise.reject(err))

 PrivateAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.setItem("token","");
        window.location.replace('/auth/login'); // Redirect to login page
      }
      return Promise.reject(error);
    }
  );


export {PublicAxios,PrivateAxios}