import React, { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { useNavigate } from "react-router-dom";

const Test = ({ user }) => {
    const navigate = useNavigate();
    const [result, setResult] = useState(null);

    const handleTestSubmit = async (answers) => {
        const mbtiResult = calculateMBTI(answers);
        // 결과를 API로 저장할 부분
        setResult(mbtiResult);
    };

    const handleNavigateToResults = () => {
        navigate("/results");
    };

    return (
        <div className="w-full flex flex-col items-center justify-center bg-gray-50 min-h-screen">
            <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto shadow-lg">
                {!result ? (
                    <>
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">
                            MBTI 테스트
                        </h1>
                        <TestForm onSubmit={handleTestSubmit} />
                    </>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">
                            테스트 결과: {result}
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            {mbtiDescriptions[result] || "해당 성격 유형에 대한 설명이 없습니다."}
                        </p>
                        <button
                            onClick={handleNavigateToResults}
                            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                        >
                            결과 페이지로 이동하기
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Test;
