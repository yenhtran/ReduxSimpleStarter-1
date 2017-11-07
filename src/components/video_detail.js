import React from 'react';

const VideoDetail = ({video}) => {

    /* Because some parent objects just can't fetch information fast enough to satisfy the needs of child objects. So to handle this we need to add a check inside of video detail components to make sure that a video has been provided in the props before it attempts to render.
    */

    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail

