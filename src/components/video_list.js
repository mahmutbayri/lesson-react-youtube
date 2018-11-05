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
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

VideoList.propTypes = {
    videos: PropTypes.array.isRequired,
    onVideoSelect: PropTypes.func.isRequired,
};

export default VideoList;
