import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Layout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
    const navigate = useNavigate();

    useEffect(() => {
        // 로컬 스토리지에서 토큰을 확인하여 로그인 상태 설정
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token); // 토큰이 있으면 로그인 상태 true
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token"); // 토큰 삭제
        setIsLoggedIn(false); // 로그인 상태 false
        navigate("/login"); // 로그인 페이지로 이동
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-blue-600 text-white p-4">
                <div className="container mx-auto flex items-center justify-between">
                    {/* 홈 링크 */}
                    <Link to="/" className="text-2xl font-semibold">홈</Link>

                    {/* 로그인 상태에 따라 다르게 표시 */}
                    <nav>
                        <ul className="flex space-x-6">
                            {!isLoggedIn ? (
                                <li>
                                    <Link to="/login" className="hover:text-gray-300">로그인</Link>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <button
                                            onClick={() => navigate("/profile")}
                                            className="flex items-center space-x-2 hover:text-gray-300"
                                        >
                                            <img
                                                src="/profile-icon.png" // 예시로 회원 아이콘
                                                alt="회원 아이콘"
                                                className="w-6 h-6 rounded-full"
                                            />
                                            <span>프로필</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="text-red-500 hover:text-red-300"
                                        >
                                            로그아웃
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* 페이지 내용 */}
            <main className="flex-1 p-6">
                <Outlet /> {/* 자식 컴포넌트가 이곳에 렌더링됩니다 */}
            </main>
        </div>
    );
};

export default Layout;
