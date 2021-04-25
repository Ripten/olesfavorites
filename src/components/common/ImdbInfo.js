import React, { useEffect, useState } from 'react';
import '../../styles/MediaModal.css';
import imdb from '../../images/imdb.png';
import axios from 'axios';


function ImdbInfo(props) {
    const [data, setData] = useState({ imdbData: [] });
    const [loading, setLoading] = useState(false);
 
    useEffect(() => {
        const imdbId = getImdbId(props.url);

        const fetchData = async () => {
            setLoading(true);
            try {
              const result = await axios(
                `https://www.omdbapi.com/?i=${imdbId}&apiKey=15d1860`,
              );
              setData(result.data);
              setLoading(false);
            } catch (err) {
              setLoading(false);
            }
        };
        fetchData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            {
            loading ? (
                <div className="loadingmessage">Loading...</div>
            ) : 
            (<div className="modal-content">
                <div className="metadata" onClick={props.handleClose}>
                    <h1 className="modal-header">{data.Title}</h1>
                    <img className="modal-poster" src={data.Poster} alt="poster" />
                    <p className="modal-info">{getDirectorOrWriter(data)}</p>
                    <p className="modal-info">IMDb Rating: {getImdbScore(data.Ratings)}</p>
                </div>
                {createImdbLink(props.url)}
            </div>)
            }
        </div>
    );
}

function getImdbId(imdbLink) {
    var urlString = String(imdbLink);
    return urlString.slice(27).replace('/', '');
}

function getImdbScore(ratings) {
    var score = "";

    if (ratings != null) {
        ratings.forEach(rating => {
            if (rating.Source === "Internet Movie Database") {
                score = rating.Value.substring(0, 3);
            }
        });
    }

    return score;
}

function getDirectorOrWriter(metadata) {
    if (metadata.Director !== "N/A") {
        return "Directed by " + metadata.Director;
    }
    else if (metadata.Writer !== "N/A") {
        return "Written by " + metadata.Writer;
    }
    else {
        return "";
    }
}

function createImdbLink(link) {
    return (
        <a href={link}>
            <img className="imdb-icon" src={imdb} alt="imdb" />
        </a>
    )
}

export default ImdbInfo;