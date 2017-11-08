import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = config.API_KEY;

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

/* In order to hook up the search bar functionality, we will want to pass a callback down into search_bar.js. In order to do that, we will pass a callback down (similar to VideoList) into SearchBar component.
*/
        this.videoSearch('surfboards');
    }

/* The first thing we do is refactored the YouTube search into its own method and the method just takes a single string- a search term. */
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        return (

/* We then took this method (videoSearch()) and we passed it down into SearchBar under the property onSearchTermChange. So all search_bar has to do is call props.onSearchTermChange with a new search term and that will call our searching function which will go ahead and fetch a new list of videos.*/

            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
