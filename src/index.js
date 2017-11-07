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

/* We want to add the concept of a selected video to state. This way we don't have to pass 'this.state.videos[0]' to video details.*/
        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

/* In order to pass the selectedVideo from video_list_item > video_list > app, we need to pass a callback (onVideoSelect) down to the grandchildren. Passing callbacks like this is a great way to do small communication between a parent component and a child component. You shouldn't go more than 2-levels deep.*/
    render(){
        return (
            <div>
                <SearchBar/>
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
