
const AuthForm = () => {
    return (
        <div>      
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
            </div>
    )
}

export default AuthForm;