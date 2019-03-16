import React from 'react';
import AddPanel from '../../AddPanel';
import AddStudentRow from './AddStudentRow';

const StudentsPage = () => {
    return (
        <div className="students-page">
            <AddPanel NewRow={AddStudentRow} />
        </div>
    );
}

export default StudentsPage;
