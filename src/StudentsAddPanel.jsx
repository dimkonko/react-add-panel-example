import React from 'react';
import AddPanel from './AddPanel';

const AddStudentRow = (props) => {
    return (
        <div>
            <input name="name" placeholder="name" />
            <input name="email" placeholder="email" />
        </div>
    );
};

class StudentsAddPanel extends React.Component {

    onFieldChange = (event) => {

    };

    renderFields = () => {
        return (
            
        );
    };

    render() {
        return <AddPanel />
    }
}

export default StudentsAddPanel;
