import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' }
    }

    render () {

/* We refactored the onChange event here. So whenever the content of the input changes, it now calls onInputChange with the new input value */
        return (
            <div className="search-bar">
                <input
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

/* onInputChange in turn has two purposes inside:
*   1. It sets the state of this component
*   2. It fires off the callback function onSearchTermChange
* */
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
