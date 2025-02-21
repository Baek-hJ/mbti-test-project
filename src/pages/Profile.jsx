
const Profile = () => {
    return (
        <div>
            <h1>프로필</h1>
            <input type="text" placeholder="닉네임 수정" />
            <button
                onClick={() => {
                    alert('수정되었습니다.');
                }}
            >
                수정
            </button>
        </div>
    )
}

export default Profile;