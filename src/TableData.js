import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableData = ({ endpoint }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/${endpoint}`)
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [endpoint]);

  return (
    <div>
      <h2>{endpoint}</h2>
      <table>
        <thead>
          <tr>
            {/* Adjust table headers according to your data */}
            {data.length > 0 && Object.keys(data[0]).map(key => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => <td key={idx}>{value}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;