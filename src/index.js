import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = config.API_KEY;

/* YOUTUBE Search Response
*   - Downwards data flow: only the most parent component in the application should be responsible for fetching data
*/

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'));
