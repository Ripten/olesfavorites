import React, {Component} from 'react';
import '../../styles/Media.css';
import gameData from '../../data/gameData';
import { getTitle } from '../common/common.jsx';


class GamesTable extends Component {
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
                <table align="center">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year (EU)</th>
                            <th>System used</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gameData.map((game) => (
                            <tr key={game.title}>
                                {getTitle(game)}
                                <td>{game.released}</td>
                                <td>{game.system}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GamesTable;