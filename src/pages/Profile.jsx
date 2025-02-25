const Profile = () => {
    return (
        <div className="w-full max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                프로필
            </h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="닉네임 수정"
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <button
                onClick={() => alert('수정되었습니다.')}
                className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300"
            >
                수정
            </button>
        </div>
    );
}

export default Profile;
