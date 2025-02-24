import React from 'react';
import { updateTestResultVisibility, deleteTestResult } from './api';  // API 호출 함수

const TestResultItem = ({ result, isOwner, onVisibilityChange, onDelete }) => {
    const handleVisibilityToggle = async () => {
        try {
            await updateTestResultVisibility(result.id, !result.visibility);
            if (onVisibilityChange) onVisibilityChange();  // visibility 변경 후 부모에서 데이터 새로고침
        } catch (error) {
            console.error('Error toggling visibility:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteTestResult(result.id);
            if (onDelete) onDelete();  // 삭제 후 부모에서 데이터 새로고침
        } catch (error) {
            console.error('Error deleting test result:', error);
        }
    };

    return (
        <div>
            <h3>{result.name}</h3>
            <p>{result.description}</p>
            <p>Visibility: {result.visibility ? 'Visible' : 'Hidden'}</p>

            {isOwner && (
                <div>
                    <button onClick={handleVisibilityToggle}>
                        {result.visibility ? 'Hide' : 'Show'}
                    </button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default TestResultItem;
