import React, { useState } from "react";
import { getEmailForForgotPassword } from "../service/UserService";
import swal from "sweetalert";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await getEmailForForgotPassword(data);
      const { message } = res.data;
      swal(message, "success");
      setLoading(false);
    } catch (err) {
      console.log(err)

    }
  };



  return (
    <>
      <Link to="/auth/login"> <FaArrowLeft className="ml-20 mt-20" /></Link>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </>

  );
};
export default ForgotPassword;