import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <input type="text" placeholder="닉네임" />
      <button
        onClick={() => {
          alert("회원가입 되었습니다.");
        }}
      >
        회원가입
      </button>
      <h2>이미 계정이 있으신가요?</h2>
      <Link to="/Login">로그인</Link>
    </div>
  )
}

export default Signup;