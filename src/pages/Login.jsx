import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", { id, password });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      setError("로그인 실패! 아이디 또는 비밀번호를 확인하세요.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        로그인
      </h2>
      <AuthForm isSignup={false} />
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}

      <div className="text-center mt-6">
        <h3 className="text-lg text-gray-600 mb-2">계정이 없으신가요?</h3>
        <Link to="/signup" className="text-blue-500 hover:underline">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
