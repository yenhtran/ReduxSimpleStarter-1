import React, { Component } from 'react';

/* Steps to Handling User Events
* 1. Declare a event handler - a function that should be ran whenever the event occurs
* 2. Pass the event handler to the element that we want to monitor for events
* */

class SearchBar extends Component {
    render () {
        //pass event handler to element
        return <input onChange={ this.onInputChange } />
    }

    //Event Handler
    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;


/****** REFACTOR USING ES6:
class SearchBar extends Component {
    render () {
        return <input onChange={event => console.log(event.target.value)} />
    }
}
*/