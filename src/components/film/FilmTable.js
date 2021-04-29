import React, {Component} from 'react';
import '../../styles/Media.css';
import filmData from '../../data/filmData.js';
import MediaModal from '../common/MediaModal.js';
import {  getTitle } from '../common/common.jsx';


class FilmTable extends Component {
    state = { show: false, data: '' }

    showModal = (newData) => {
        this.setState({ show: true, data: newData });
    }
  
    hideModal = () => {
        this.setState({ show: false, data: '' });
    }

    render() {
        return (
            <div>
                <MediaModal show={this.state.show} handleClose={this.hideModal} data={this.state.data} ></MediaModal>
                <table align="center">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filmData.map((film) => (
                            <tr key={film.title} className="tr-clickable" onClick={() => this.showModal(film)}>
                                {getTitle(film)}
                                <td>{film.year}</td>
                                <td>{film.language}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FilmTable;