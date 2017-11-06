import React from 'react';

/*
* -Video List doesn't really have any need for state- it doesn't record any user interaction and doesn't re-render itself in any fashion. So we can really just make it a plain functional component.
* - From the App component, the props object will arrive as an argument to the VideoList function
* - In a functional component, the props object is an ARGUMENT
* - In a class-based component, props are available anywhere in any method as 'this.props'
* */

const VideoList = (props) => {
    return (
        <ul className="col-md-4" list-group>
            {props.videos.length}
        </ul>
    );
};

export default VideoList


