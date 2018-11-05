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
        return <div className="search-bar">
            <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}
            />
        </div>;
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
