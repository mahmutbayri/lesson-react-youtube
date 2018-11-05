import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from "./video_list_item";


const VideoList = (props) => {

    const videoItems = props.videos.map(video => {
        return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}
        />
    });

    return (
        <div className="col-md-4">
            <ul className="list-unstyled">
                {videoItems}
            </ul>
        </div>
    );
};

VideoList.propTypes = {
    videos: PropTypes.array.isRequired,
    onVideoSelect: PropTypes.func.isRequired,
};

export default VideoList;
