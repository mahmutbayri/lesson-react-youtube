import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="media my-4" onClick={() => onVideoSelect(video)}>
            <img className="mr-3" src={imageUrl} alt="Generic placeholder image" />
            <div className="media-body">
                <h5 className="mt-0 mb-1">{video.snippet.title}</h5>
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
