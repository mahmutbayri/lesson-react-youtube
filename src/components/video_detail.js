import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = ({ video }) => {

    if (!video) {
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={embedUrl}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
                <div></div>
            </div>
        </div>
    )
};

VideoDetail.propTypes = {
    video: PropTypes.shape({
        snippet: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }),
        id: PropTypes.shape({
            videoId: PropTypes.string.isRequired,
        })
    })
};

export default VideoDetail;
