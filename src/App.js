import React, { Fragment, useRef, useEffect, useState } from 'react';
import { select } from 'd3';

import './App.css';

function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20]);

  const svgRef = useRef();

  useEffect(() => {
    const svgSelect = select(svgRef.current);
    svgSelect
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', value => value)
      .attr('cx', value => value * 2)
      .attr('cy', value => value * 2)
      .attr('stroke', 'red');
  }, [data]);

  return (
    <Fragment>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map(value => value + 5))}>Update data</button>
    </Fragment>
  );
}

export default App;
