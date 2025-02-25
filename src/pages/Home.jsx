import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-4">
        무료 성격 테스트
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">성격 유형 검사</h2>
        <p className="text-gray-600">자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">성격 유형 이해</h2>
        <p className="text-gray-600">다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">팀 평가</h2>
        <p className="text-gray-600">팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.</p>
      </section>

      <div className="text-center">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-600 transition duration-300">
          내 성격 알아보러 가기
        </button>
      </div>

      <div className="text-center mt-4">
        <Link to="/Login" className="text-blue-500 hover:underline">
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Home;
