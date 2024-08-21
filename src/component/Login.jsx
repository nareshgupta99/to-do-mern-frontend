import React, { useState } from "react";
import { loginUser } from "../service/UserService";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";


const Login =()=>{
    const [formData, setFormData] = useState({
        email: "",
        password: ""
      });
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    const navigate=useNavigate();
      const handleSubmit = async (e) => {
        e.preventDefault();  
        try{
            const res=await loginUser(formData)
            const {message,token}=res.data;
            localStorage.setItem("token",token);
            swal(message, "success");
            navigate("/user/task")   
        }
        catch(err){
          console.log(err)
          const {error}=err.response.data
          swal(error, "error");
        }
        
      };
    return(
      <>
       <Link to={"/auth/sign-up"}>  <h1 className="underline: underline-offset-2 text-blue-600 ml-20 mt-20 ">SignUp Page</h1> </Link>
        <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
              />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
              Login
            </button>
          <Link to="/forgot/password">Forgot-password</Link>
          </div>
        </form>
      </div>
              </>
    )
}
export default Login;