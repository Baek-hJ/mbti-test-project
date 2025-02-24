import axios from "axios";

// Axios 인스턴스 생성
const instance = axios.create({
    baseURL: "https://www.nbcamp-react-auth.link",
    timeout: 1000,
});

// 데이터 가져오는 함수
export const fetchData = async () => {
    try {
        const response = await instance.get("/data");
        return response.data;
    } catch (error) {
        console.error("API 요청 에러:", error);
        return null; // 특정 상황에서 null 반환 (에러 핸들링)
    }
};

// 요청 인터셉터 - 모든 요청에 자동으로 토큰 추가
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 응답 인터셉터 - 401 에러 시 로그아웃 및 리다이렉트
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.error("인증 실패! 로그아웃 처리 필요");
            localStorage.removeItem("token");
            
            if (window.location.pathname !== "/login") {
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export default instance;
