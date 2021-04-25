import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/App.css';
import Films from './Films.js';
import TvSeries from './TvSeries.js';
import kon from '../images/Kon.png'
import film from '../images/film-black.png'
import tv from '../images/tv-black.png'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        showFilms: false,
        showTV: false
    };
  }

  toggleFilms = () => {
    const { showFilms } = this.state;
    
    this.setState({
      showFilms: !showFilms,
      showTV: false
    });

    let tvbutton = document.getElementById('tv-button')

    if (this.state.showFilms === true) {
      ReactDOM.findDOMNode(tvbutton).style['opacity'] = 1;
    } else {
      ReactDOM.findDOMNode(tvbutton).style['opacity'] = 0.3;
    }

    let filmbutton = document.getElementById('film-button')
    ReactDOM.findDOMNode(filmbutton).style['opacity'] = 1;
  }

  toggleTV = () => {
    const { showTV } = this.state;
    
    this.setState({
      showTV: !showTV,
      showFilms: false
    });
    
    let filmbutton = document.getElementById('film-button')

    if (this.state.showTV === true) {
      ReactDOM.findDOMNode(filmbutton).style['opacity'] = 1;
    } else {
      ReactDOM.findDOMNode(filmbutton).style['opacity'] = 0.3;
    }
    
    let tvbutton = document.getElementById('tv-button')
    ReactDOM.findDOMNode(tvbutton).style['opacity'] = 1;
  }

  reset = () => {
    this.setState({
      showTV: false,
      showFilms: false
    });

    let filmbutton = document.getElementById('film-button')
    let tvbutton = document.getElementById('tv-button')
    ReactDOM.findDOMNode(filmbutton).style['opacity'] = 1;
    ReactDOM.findDOMNode(tvbutton).style['opacity'] = 1;
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
          </div>
          { (() => {
              if (this.state.showFilms)
                return <Films />
              if (this.state.showTV)
                return <TvSeries />
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