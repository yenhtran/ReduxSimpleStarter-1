import React, { Component } from 'react';

/* Intro to STATE:
A plain Javascript Object that is used to record and react to user events. Each class-based component that we define has its own state object whenever a component state is changed, the component immediately renders and also forces all of its children to render as well.

1. Before we ever use state inside of a component, we need to initialize the state object

    constructor(){
        super(prop);
        this.state = { term: '' }
    }
*
* */
class SearchBar extends Component {
    constructor(){
        super(prop);
        this.state = { term: '' }
    }

    render () {
        return <input onChange={event => console.log(event.target.value)} />
    }
}

export default SearchBar;
