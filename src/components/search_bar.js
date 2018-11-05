import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
        };
    }

    render() {
        return <div className="row" style={{ marginBottom: 20 }}>
            <div className="col-md">
                <div className="input-group">
                    <input
                        className="form-control"
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)}
                    />
                </div>
            </div>
        </div>
    }

    /**
     * @param string term 
     */
    onInputChange(term) {
        this.setState({
            term: term,
        });
        this.props.onSearchTermChange(term);
    }
}

SearchBar.propTypes = {
    onSearchTermChange: PropTypes.func.isRequired,
};

export default SearchBar;
