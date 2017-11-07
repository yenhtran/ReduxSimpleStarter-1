import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    /* VideoList now has a property on prop's called props.onVideoSelect. We are now going to pass this property down to VideoListItem*/

    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}
            />
        )
    });

    return (
        <ul className="col-md-4" list-group>
            {videoItems}
        </ul>
    );
};

export default VideoList


