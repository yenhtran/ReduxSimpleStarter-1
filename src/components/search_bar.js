import React, { Component } from 'react';

/* More on STATE:
    -Manipulating State: the constructor function is the only time we will ever see code like "this.state = { some Object}". Use setState() instead.
*/

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' }
    }

    render () {
        return (
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
                Value of the input: {this.state.term}
            </div>
        )
    }
}

export default SearchBar;
