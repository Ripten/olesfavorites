import React from 'react';
import FilmTable from './FilmTable.js';
import Disclaimer from '../common/Disclaimer.js';
import '../../styles/Media.css';

const Films = () => (
    <div className="table-content">
      <Disclaimer />
      <FilmTable />
    </div>
  );

export default Films;