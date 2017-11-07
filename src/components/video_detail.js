import React from 'react';
/*
* Because Video Detail really doesn't need to care about maintaining state, we should take that into account and just use functional component
* */

const VideoDetail = ({video}) => {
    const videoId = video.id.videId;
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

