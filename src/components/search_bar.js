import React, { Component } from 'react';

/* Controlled Components:
    - Controlled Field: a form element like an input whose value is set by the state rather than the other way around
    - by adding a value property that is set with:

    <input
        value = {this.state.term} ...

    we now made it a controlled component of a controlled form input element.

    Flow of operation:
       1. App starts up and renders an instance of SearchBar
       2. In search_bar.js, the constructor is called
       3. 'this.state.term' is set to an empty string
       4. Component renders and the value of the input is set to retrieve its value from this.state.term
       5. When user enters some text, the event handlers sends a call to update state to equal to the changed text value. At that point in time, the value of the input has not changed
       6. After the event handler has passed the updated values to state, this change in state kicks off a re-render that does a full circle and updates the value of the input component.
*/

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' }
    }

    render () {
        return (
            <div>
                <input
                    value = {this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        )
    }
}

export default SearchBar;
