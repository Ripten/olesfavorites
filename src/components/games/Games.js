import React from 'react';
import GamesTable from './GamesTable.js';
import Disclaimer from '../common/Disclaimer.js';
import '../../styles/Media.css';

const Games = () => (
    <div className="table-content">
      <Disclaimer />
      <GamesTable />
    </div>
  );

export default Games;