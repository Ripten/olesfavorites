import React from 'react';
import TvTable from './TvTable.js';
import Disclaimer from '../common/Disclaimer.js';
import '../../styles/Media.css';

const TvSeries = () => (
    <div className="table-content">
      <Disclaimer />
      <TvTable />
    </div>
  );

export default TvSeries;