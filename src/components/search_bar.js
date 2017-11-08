import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' }
    }

    render () {
        return (

/* It's always a good idea to give your top level component a class name that is basically the same as the component name. (SeachBar component => className="search-bar") */

            <div className="search-bar">
                <input
                    value = {this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        )
    }
}

export default SearchBar;
