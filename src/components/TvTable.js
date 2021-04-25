import React, {Component} from 'react';
import '../styles/Table.css';
import tvData from '../data/tvData';
import MediaModal from './MediaModal.js';
import { createStars } from '../common/common.jsx';


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
                            <th className="stars-th">Stars</th>
                            <th>Language</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tvData.map((row) => (
                            <tr key={row.title} className="tr-clickable" onClick={() => this.showModal(row)}>
                                <td className="title-td">{row.title}</td>
                                <td>{createStars(row.stars)}</td>
                                <td>{row.language}</td>
                                <td>{row.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TvTable;