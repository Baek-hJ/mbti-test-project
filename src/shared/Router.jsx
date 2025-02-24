import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Test from "../pages/Test";
import Results from "../pages/Results";
import Login from "../pages/login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} /> {/* 소문자로 변경 */}
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/results" element={<Results />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default Router;
