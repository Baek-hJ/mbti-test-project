import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const AuthForm = ({ isSignup }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isSignup) {
                await axios.post("/signup", { id, password, nickname });
                alert("회원가입 되었습니다.");
                navigate("/login");
            } else {
                const response = await axios.post("/login", { id, password });
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
            }
        } catch (error) {
            setError("오류 발생! 정보를 확인하세요.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{isSignup ? "회원가입" : "로그인"}</h1>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div>
                    <label>아이디</label>
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {isSignup && (
                    <div>
                        <label>닉네임</label>
                        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} required />
                    </div>
                )}
                <button type="submit">{isSignup ? "회원가입" : "로그인"}</button>
            </form>
        </div>
    );
};

export default AuthForm;
