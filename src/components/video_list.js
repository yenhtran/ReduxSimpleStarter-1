import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    /*
* - Whenever we render and array of items of the same type, React correctly assumes that we're building a list.
* - React has a bunch of logic built into it to optimize the process of rendering a list. Because it's storing the list in a hash-like object, it needs keys to access each list item.
* - A common strategy when rendering a list of data is to use the ID for that piece of data. In this example, we will use Youtube's 'etag'.
* */

    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video}/>
    });



    return (
        <ul className="col-md-4" list-group>
            {videoItems}
        </ul>
    );
};

export default VideoList


