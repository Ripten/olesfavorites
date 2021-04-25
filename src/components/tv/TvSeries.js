import React from 'react';
import TvTable from './TvTable.js';
import TvDisclaimer from './TvDisclaimer.js';
import '../../styles/Media.css';

const TvSeries = () => (
    <div className="table-content">
      <TvTable />
      <TvDisclaimer />
    </div>
  );

export default TvSeries;