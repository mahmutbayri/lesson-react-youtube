import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
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


VideoListItem.propTypes = {
    video: PropTypes.shape({
        snippet: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            thumbnails: PropTypes.shape({
                default: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                })
            })
        }),
        id: PropTypes.shape({
            videoId: PropTypes.string.isRequired,
        })
    }),
    onVideoSelect: PropTypes.func.isRequired,
};

export default VideoListItem;
