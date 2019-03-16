import React from 'react';
import PropTypes from 'prop-types';

class AddStudentRow extends React.Component {

    static createBlank = () => {
        return { name: '' };
    }

    onChange = (event) => {
        this.props.onFieldChange({
            rowId: this.props.rowId,
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <React.Fragment>
                <input name="name" placeholder="name" onChange={this.onChange} />
                {/* <input name="email" placeholder="email" onChange={this.onFieldChange} /> */}
            </React.Fragment>
        );
    }
}

AddStudentRow.propTypes = {
    onFieldChange: PropTypes.func.isRequired,
    rowId: PropTypes.number.isRequired,
    name: PropTypes.string
}

export default AddStudentRow;
