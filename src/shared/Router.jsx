import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Test from "../pages/Test";
import Results from "../pages/Results";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute"; // ProtectedRoute 추가

const Router = () => {
  return (
    <Routes>
      {/* 홈, 회원가입, 로그인 페이지는 누구나 접근 가능 */}
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* ProtectedRoute로 보호된 경로 설정 */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/results" element={<Results />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
};

export default Router;
