import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <form action="">
      <h1>회원가입</h1>
      </form>
      <h2>이미 계정이 있으신가요?</h2>
      <Link to="/Login">로그인</Link>
    </div>
  )
}

export default Signup;