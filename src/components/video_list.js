import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    /* We access the array of videos through props that was passed from parent App. We loop through the array and create VideoListItems for each video. We pass the individual video as props to VideoListItem */

    const videoItems = props.videos.map((video) => {
        return <VideoListItem video={video}/>
    });

    /*
    * React if very good at recognizing lists
    * */
    return (
        <ul className="col-md-4" list-group>
            {videoItems}
        </ul>
    );
};

export default VideoList


