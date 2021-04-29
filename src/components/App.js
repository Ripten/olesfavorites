import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/App.css';
import Films from './film/Films.js';
import TvSeries from './tv/TvSeries.js';
import Games from './games/Games.js';
import YouTube from './youtube/YouTube.js';
import kon from '../images/Kon.png'
import film from '../images/film-icon.png'
import tv from '../images/tv-icon.png'
import youtube from '../images/youtube-icon.png';
import games from '../images/games-icon.png';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showFilms: false,
      showTV: false,
      showGames: false,
      showYouTube: false
    };
  }

  toggleFilms = () => {
    const { showFilms } = this.state;

    this.setState({
      showFilms: !showFilms,
      showTV: false,
      showGames: false,
      showYouTube: false
    });

    let tvbutton = document.getElementById('tv-button')
    let gamesbutton = document.getElementById('games-button')
    let youtubebutton = document.getElementById('youtube-button')

    if (this.state.showFilms === true) {
      ReactDOM.findDOMNode(tvbutton).style['opacity'] = 1;
      ReactDOM.findDOMNode(gamesbutton).style['opacity'] = 1;
      ReactDOM.findDOMNode(youtubebutton).style['opacity'] = 1;
    } else {
      ReactDOM.findDOMNode(tvbutton).style['opacity'] = 0.3;
      ReactDOM.findDOMNode(gamesbutton).style['opacity'] = 0.3;
      ReactDOM.findDOMNode(youtubebutton).style['opacity'] = 0.3;
    }

    let filmbutton = document.getElementById('film-button')
    ReactDOM.findDOMNode(filmbutton).style['opacity'] = 1;
  }

  toggleTV = () => {
    const { showTV } = this.state;

    this.setState({
      showTV: !showTV,
      showFilms: false,
      showGames: false,
      showYouTube: false
    });

    let filmbutton = document.getElementById('film-button')
    let gamesbutton = document.getElementById('games-button')
    let youtubebutton = document.getElementById('youtube-button')

    if (this.state.showTV === true) {
      ReactDOM.findDOMNode(filmbutton).style['opacity'] = 1;
      ReactDOM.findDOMNode(gamesbutton).style['opacity'] = 1;
      ReactDOM.findDOMNode(youtubebutton).style['opacity'] = 1;
    } else {
      ReactDOM.findDOMNode(filmbutton).style['opacity'] = 0.3;
      ReactDOM.findDOMNode(gamesbutton).style['opacity'] = 0.3;
      ReactDOM.findDOMNode(youtubebutton).style['opacity'] = 0.3;
    }

    let tvbutton = document.getElementById('tv-button')
    ReactDOM.findDOMNode(tvbutton).style['opacity'] = 1;
  }

  toggleGames = () => {
    const { showGames } = this.state;

    this.setState({
      showGames: !showGames,
      showFilms: false,
      showTV: false,
      showYouTube: false
    });

    let filmbutton = document.getElementById('film-button')
    let tvbutton = document.getElementById('tv-button')
    let youtubebutton = document.getElementById('youtube-button')

    if (this.state.showTV === true) {
      ReactDOM.findDOMNode(filmbutton).style['opacity'] = 1;
      ReactDOM.findDOMNode(tvbutton).style['opacity'] = 1;
      ReactDOM.findDOMNode(youtubebutton).style['opacity'] = 1;
    } else {
      ReactDOM.findDOMNode(filmbutton).style['opacity'] = 0.3;
      ReactDOM.findDOMNode(tvbutton).style['opacity'] = 0.3;
      ReactDOM.findDOMNode(youtubebutton).style['opacity'] = 0.3;
    }

    let gamesbutton = document.getElementById('games-button')
    ReactDOM.findDOMNode(gamesbutton).style['opacity'] = 1;
  }

  toggleYouTube = () => {
    const { showYouTube } = this.state;

    this.setState({
      showYouTube: !showYouTube,
      showFilms: false,
      showTV: false,
      showGames: false
    });

    let filmbutton = document.getElementById('film-button')
    let tvbutton = document.getElementById('tv-button')
    let gamesbutton = document.getElementById('games-button')

    if (this.state.showYouTube === true) {
      ReactDOM.findDOMNode(filmbutton).style['opacity'] = 1;
      ReactDOM.findDOMNode(tvbutton).style['opacity'] = 1;
      ReactDOM.findDOMNode(gamesbutton).style['opacity'] = 1;
    } else {
      ReactDOM.findDOMNode(filmbutton).style['opacity'] = 0.3;
      ReactDOM.findDOMNode(tvbutton).style['opacity'] = 0.3;
      ReactDOM.findDOMNode(gamesbutton).style['opacity'] = 0.3;
    }

    let youtubebutton = document.getElementById('youtube-button')
    ReactDOM.findDOMNode(youtubebutton).style['opacity'] = 1;
  }

  reset = () => {
    this.setState({
      showTV: false,
      showFilms: false,
      showGames: false,
      showYouTube: false
    });

    let filmbutton = document.getElementById('film-button')
    let tvbutton = document.getElementById('tv-button')
    let gamesbutton = document.getElementById('games-button')
    let youtubebutton = document.getElementById('youtube-button')
    ReactDOM.findDOMNode(filmbutton).style['opacity'] = 1;
    ReactDOM.findDOMNode(tvbutton).style['opacity'] = 1;
    ReactDOM.findDOMNode(gamesbutton).style['opacity'] = 1;
    ReactDOM.findDOMNode(youtubebutton).style['opacity'] = 1;
  }

  render() {
    return (
      <div className="App">
        <div className="banner">
          <div className="banner-content" onClick={this.reset}>
            Ole's Favorites
            <img className="banner-image" src={kon} alt="kon" />
          </div>
        </div>
        <div className="mainpage">
          <div className="icon-row">
            <img id="film-button" className="film-button" src={film} alt="film" onClick={this.toggleFilms} />
            <img id="tv-button" className="tv-button" src={tv} alt="tv" onClick={this.toggleTV} />
            <img id="games-button" className="games-button" src={games} alt="games" onClick={this.toggleGames} />
            <img id="youtube-button" className="youtube-button" src={youtube} alt="youtube" onClick={this.toggleYouTube} />
          </div>
          {(() => {
            if (this.state.showFilms)
              return <Films />
            if (this.state.showTV)
              return <TvSeries />
            if (this.state.showGames)
              return <Games />  
            if (this.state.showYouTube)
              return <YouTube />
            else
              return null
          })()
          }
        </div>
      </div>
    );
  }
}

export default App;