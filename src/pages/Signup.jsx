import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        회원가입
      </h2>
      <AuthForm isSignup={true} />
      <div className="text-center mt-6">
        <h3 className="text-lg text-gray-600 mb-2">이미 계정이 있으신가요?</h3>
        <Link to="/Login" className="text-blue-500 hover:underline">
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Signup;
