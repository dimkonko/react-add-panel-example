import React from 'react';
import PropTypes from 'prop-types';
import { createStudent } from './pages/students/studentsApi';

class AddPanel extends React.Component {

    constructor(props) {
        super(props);

        this.idCounter = 0;
        this.state = {
            isOpen: false,
            rows: [this.createRow()]
        }
    }

    generateNextId = () => {
        this.idCounter += 1;
        return this.idCounter;
    }

    createRow() {
        const blankRow = this.props.NewRow.createBlank();
        blankRow.rowId = this.generateNextId();
        return blankRow;
    }

    // togglePanel = () => {
    //     const isOpen = this.state.isOpen;
    //     this.setState({ isOpen: !isOpen });
    // }

    addRow = () => {
        this.setState({
            rows: [...this.state.rows, this.createRow()]
        });
    }

    removeRow = (rowId) => {
        this.setState({
            rows: this.state.rows.filter(row => row.rowId !== rowId)
        });
    }

    handleRemoveClick = (event) => {
        const rows = this.state.rows;

        if (rows.length === 1) {
            this.setState({
                rows: [this.createRow()]
            });
            return;
        }

        const rowId = parseInt(event.target.dataset.rowid, 10);
        this.removeRow(rowId);
    }

    onFieldChange = (rowState) => {
        const rowId = rowState.rowId;
        const rows = this.state.rows.map(row => {
            return rowId === row.rowId ? rowState : row;
        });
        this.setState({ rows });
    }

    handleSubmit = async () => {
        for (const row of this.state.rows) {
            await createStudent(row);
            this.removeRow(row.rowId);
        }
        console.log("Done");
    }

    render() {
        const { NewRow } = this.props;
        const rows = this.state.rows.map((row) => {
            return (
                <div key={row.rowId}>
                    <NewRow {...row} onFieldChange={this.onFieldChange} />
                    <button onClick={this.handleRemoveClick} data-rowid={row.rowId}>Remove</button>
                </div>
            );
        });
        
        return (
            <div className="add-panel">
                <div className="fields">
                    {rows}
                </div>
                <div>
                    <button onClick={this.addRow}>Add Row</button>
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

AddPanel.propTypes = {
    NewRow: PropTypes.func.isRequired
}

export default AddPanel;
