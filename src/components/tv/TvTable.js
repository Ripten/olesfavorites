import React, {Component} from 'react';
import '../../styles/Media.css';
import tvData from '../../data/tvData';
import MediaModal from '../common/MediaModal.js';
import { getTitle } from '../common/common.jsx';


class TvTable extends Component {
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
                        {tvData.map((tv) => (
                            <tr key={tv.title} className="tr-clickable" onClick={() => this.showModal(tv)}>
                                {getTitle(tv)}
                                <td>{tv.year}</td>
                                <td>{tv.language}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TvTable;