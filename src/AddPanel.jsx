import React from 'react';
import PropTypes from 'prop-types';

class AddPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            rows: []
        }
    }

    togglePanel = () => {
        this.setState({ isOpen: true });
    }

    addRow = () => {
        const newRow = this.props;
        const rows = this.state.rows;
        rows.push();
        this.setState({ rows: rows })
    }

    render() {
        const rows = this.state.rows.map((row) => {
            return 
        });
        
        return (
            <div className="add-panel">
                <div className="fields">
                    {this.props.renderRow()}
                    <button onClick={this.removeRow}>Remote</button>
                </div>
                <button onClick={this.addRow}>Add Row</button>
            </div>
        );
    }
}

AddPanel.propTypes = {
    renderRow: PropTypes.function.isRequired,
    createRow: PropTypes.function.isRequired
}
