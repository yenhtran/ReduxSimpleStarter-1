import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

/*ES6 explanation: above is same as
const video = props.video
const onVideoSelect = props.onVideoSelect
* */

    const imageUrl = video.snippet.thumbnails.default.url;

    /* In order to use onVideoSelect, we want to call a function every time a user clicks anywhere within this li. Adding onClick event listener. So whenever a user clicks on the li, we'll call onVideoSelect and we'll pass it this particular video list item's video*/
    return (
        <li onClick={() => onVideoSelect(video)} className='list-group-item'>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem