import axios from 'axios';

const API_URL = 'https://www.nbcamp-react-auth.link';

// 회원가입 (POST /register)
export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

// 로그인 (POST /login)
export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
};

// 사용자 정보 조회 (GET /user)
export const getUserProfile = async (token) => {
    const response = await axios.get(`${API_URL}/user`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    });
    return response.data;
};

// 사용자 정보 수정 (PATCH /profile)
export const updateProfile = async (token, formData) => {
    const response = await axios.patch(`${API_URL}/profile`, formData, {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    });
    return response.data;
};