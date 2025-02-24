import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios"; 

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // 로그인 성공 시 이동을 위한 훅

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post("/login", { id, password });

      localStorage.setItem("token", response.data.token); // 토큰 저장
      navigate("/dashboard"); // 로그인 성공 시 대시보드로 이동
    } catch (err) {
      setError("로그인 실패! 아이디 또는 비밀번호를 확인하세요.");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>로그인</h1>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* 에러 메시지 표시 */}
        <div>
          <label>아이디</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
      
      <h2>계정이 없으신가요?</h2>
      <Link to="/signup">회원가입</Link> 
    </div>
  );
};

export default Login;
