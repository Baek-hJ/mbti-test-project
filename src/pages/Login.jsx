import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>로그인</h1>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <button
        onClick={() => {
          alert("로그인 되었습니다.");
        }}>
        로그인
      </button>
      <h2>계정이 없으신가요?</h2>
      <Link to="/Signup">회원가입</Link>
    </div>
  )
}

export default Login;