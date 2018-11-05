import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyB42M9RHXPappqB1gAjbUnMrXJAVX5pnt0';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };

        this.videoSearch('resident evil');
    }

    /**
     * @param string term 
     */
    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    render() {
        const videoSearch = _.debounce(term => {
            this.videoSearch(term)
        }, 300);

        return (
            <Fragment>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container'),
);
