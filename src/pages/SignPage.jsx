import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Registration from "../components/LoginAndRegistration/Registration";
import Login from "../components/LoginAndRegistration/Login";


const SignPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Toggle Buttons */}
        <div className="flex">
          <button
            className={`w-1/2 py-2 font-semibold text-lg transition duration-170 ${
              isLogin ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 font-semibold text-lg transition duration-170 ${
              !isLogin ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Conditional Rendering Instead of Animation Issue */}
        <div className="p-6">
          {isLogin ? <Login /> : <Registration />}
        </div>
      </div>
    </div>
  );
};

export default SignPage;157