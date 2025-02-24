import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import TestResultItem from './TestResultItem';
import { getTestResults } from './api';  // API 호출 함수

const TestResultList = ({ userId, onRefresh }) => {
    // 데이터 fetching
    const { data, error, isLoading, refetch } = useQuery('testResults', getTestResults);

    useEffect(() => {
        if (onRefresh) onRefresh(refetch);  // 부모로부터 받은 콜백 함수 호출
    }, [refetch, onRefresh]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading results</div>;

    // 본인 소유의 테스트만 표시
    const filteredResults = data.filter(result => result.visibility || result.ownerId === userId);

    return (
        <div>
            {filteredResults.map(result => (
                <TestResultItem
                    key={result.id}
                    result={result}
                    isOwner={result.ownerId === userId}
                    onVisibilityChange={onRefresh}
                    onDelete={onRefresh}
                />
            ))}
        </div>
    );
};

export default TestResultList;
