import React from 'react';
import FilmTable from './FilmTable.js';
import FilmDisclaimer from './FilmDisclaimer.js';
import '../styles/App.css';

const Films = () => (
    <div className="table-content">
      <FilmTable />
      <FilmDisclaimer />
    </div>
  );

export default Films;