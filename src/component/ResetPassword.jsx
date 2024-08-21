import React, { useState } from "react";
import { loginUser, resetPassword } from "../service/UserService";
import swal from "sweetalert";
import { useParams } from "react-router";

const ResetPassword =()=>{

    const { resetToken } = useParams();
    console.log(resetToken);

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
        resetToken:resetToken
      });
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();  
        setFormData({
            ...formData,
            [resetToken]: resetToken
          });
        try{
            const res=await resetPassword(formData)
            const {message}=res.data;
            swal(message, "success");
            setFormData({
              password: "",
        confirmPassword: "",
        resetToken:resetToken
            })
        }
        catch(err){
          console.log(err)
          const {message}=err.response.data
          swal(message, "error");
        }
        
      };
    return(
        <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Reset Password</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
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
              Submit
            </button>
          </div>
        </form>
      </div>
    )
}
export default ResetPassword;