import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        // 인증되지 않은 경우 로그인 페이지로 리디렉션
        return <Navigate to="/login" replace />;
    }

    return children; // 인증된 경우 자식 컴포넌트 렌더링
};

export default ProtectedRoute;
