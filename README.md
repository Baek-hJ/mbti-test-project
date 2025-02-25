# MBTI 테스트 프로젝트

이 프로젝트는 MBTI 테스트를 기반으로 사용자에게 맞는 결과를 제공하는 웹 애플리케이션입니다.

## 📌 프로젝트 개요
- 사용자는 MBTI 테스트를 진행하고 결과를 저장할 수 있습니다.
- 회원가입 및 로그인 기능을 제공합니다.
- JSON Server를 이용해 테스트 결과 데이터를 관리합니다.

---

## 🛠 기술 스택
- **Frontend**: React, React Router, Axios
- **Backend**: JSON Server (임시 API 서버)
- **패키지 관리**: npm

---

## 🚀 프로젝트 실행 방법

### 1️⃣ **프로젝트 클론**
```sh
git clone https://github.com/your-repo/mbti-test-project.git
cd mbti-test-project
```

### 2️⃣ **필요한 패키지 설치**
```sh
npm install
```

### 3️⃣ **JSON Server 실행** (API 서버 실행)
```sh
npx json-server --watch db.json --port 3001
```
> JSON Server가 정상적으로 실행되면 `http://localhost:3001/`에서 확인할 수 있습니다.

### 4️⃣ **React 애플리케이션 실행**
```sh
npm run dev
```
> 개발 서버가 실행되며 `http://localhost:5173/`에서 프로젝트를 확인할 수 있습니다.

---

## 📡 API 엔드포인트
| 메서드 | 엔드포인트               | 설명 |
|--------|--------------------------|---------------------------------|
| GET    | `/testResults`           | 모든 테스트 결과 조회 |
| POST   | `/testResults`           | 새로운 테스트 결과 추가 |
| PATCH  | `/testResults/:id`       | 특정 테스트 결과 수정 |
| DELETE | `/testResults/:id`       | 특정 테스트 결과 삭제 |

---

## 📂 프로젝트 구조
```
mbti-test-project/
├── public/                 # 정적 파일
├── src/
│   ├── api/
│   │   ├── axios.js       # Axios 설정 파일
│   ├── components/
│   │   ├── AuthForm.jsx   # 로그인/회원가입 폼
│   ├── pages/
│   │   ├── Home.jsx       # 홈 페이지
│   │   ├── Login.jsx      # 로그인 페이지
│   │   ├── Signup.jsx     # 회원가입 페이지
│   │   ├── Test.jsx       # MBTI 테스트 페이지
│   │   ├── Results.jsx    # 결과 목록 페이지
│   ├── routes/
│   │   ├── Router.jsx     # 라우팅 설정
│   ├── App.jsx            # 메인 앱 컴포넌트
│   ├── main.jsx           # React 엔트리 포인트
├── db.json                 # JSON Server 데이터 파일
├── package.json            # 프로젝트 의존성 및 스크립트
├── README.md               # 프로젝트 설명서
```

---

## ⚠️ 오류 해결

### 1️⃣ JSON Server 관련 오류
✅ JSON Server가 실행 중인지 확인하세요.
```sh
npx json-server --watch db.json --port 3001
```

✅ `db.json` 파일이 존재하는지 확인하세요.

### 2️⃣ API 요청 실패 (`axios` 오류)
✅ API 요청이 `http://localhost:3001/`를 향하고 있는지 확인하세요.

✅ CORS 오류가 발생한다면, JSON Server를 실행할 때 다음 옵션을 추가해보세요.
```sh
npx json-server --watch db.json --port 3001 --host 0.0.0.0
```

### 3️⃣ React 실행 오류 (`vite` 관련 오류)
✅ `node_modules`가 손상되었을 수 있습니다. 다음 명령어를 실행하여 다시 설치하세요.
```sh
rm -rf node_modules package-lock.json
npm install
```

✅ `vite.config.js` 설정이 올바른지 확인하세요.

---


