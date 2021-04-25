import React from 'react';
import '../../styles/YouTube.css';
import youtubeData from '../../data/youtubeData';
import YouTubeEmbed from './YouTubeEmbed.js';


function YouTube() {
    return (
        <div className="youtube-content">
            {youtubeData.map((video) => (
                <div className="youtube-video" key={video.id}>
                    <p className="video-title">{video.title}</p>
                    <p className="video-creator">by {video.creator}</p>
                    <p className="video-description">{video.description}</p>
                    <YouTubeEmbed embedId={video.id} />
                </div>
            ))}
        </div>
    );
}

export default YouTube;