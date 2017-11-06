import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = config.API_KEY;

class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos: [] };

        /* Note that the YTSearch kicks off after we set this.state to an empty array. So the length of the array displays as zero for a half second before we see the length after the network call.*/
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos})
        });
    }

    /*
    * - Since App is the parent to VideoList, VideoList needs access to the list of videos in App's State. VideoList needs a reference to those list of videos. Therefore we need a way to pass some data from the parent component app into the child component VideoList.
    * - Passing data from a parent component to a child component can be done by defining a property on the JSX tag:
    *
                <VideoList videos={this.state.videos}/>
            </div>

    * - Passing data like this is referred to as 'passing props' => we are passing prop videos to VideoList. Any time that App re-renders, VideoList will get the new list of videos as well
    * */

    render(){
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
