import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = config.API_KEY;

/* Refactoring Functional Component to Class-based Component
*   -We want to do this to App because we want app to keep track of the list of videos. Where we want to do this is in it's state
*/

class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            // non-ES6: this.setState({videos: videos})
            // ES6: only when key and values are the same
            this.setState({videos})
        });
    }
    render(){
        return (
            <div>
                <SearchBar/>
            </div>
        )
    }
}


/*
OLD CODE:
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}
*/

ReactDOM.render(<App />, document.querySelector('.container'));
