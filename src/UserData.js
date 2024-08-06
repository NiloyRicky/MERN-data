import React from 'react';
import { useGlobal } from './Context';
import NavBar from './Navbar';

const UserData = () => {
  const { loading, error, nseData, bseData } = useGlobal();

  if (loading) {
    return (
      <>
        <NavBar />
        <h1 className='text-center fs-6 mt-auto'>Loading...</h1>
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavBar />
        <h1 className='text-center fs-6 mt-auto'>Error: {error}</h1>
      </>
    );
  }

  if (nseData.length === 0 && bseData.length === 0) {
    return (
      <>
        <NavBar />
        <p>No data found</p>
      </>
    );
  }

  const renderNSETable = (data) => (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Series</th>
            <th>Date</th>
            <th>Paid</th>
            <th>ISIN</th>
            <th>Execution Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.name_of_company}</td>
              <td>{item.series}</td>
              <td>{item.date_of_listing}</td>
              <td>{item.paid_up_value}</td>
              <td>{item.isin_number}</td>
              <td>{item.execution_datetime_ist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderBSETable = (data) => (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Industry</th>
            <th>Scrip Name</th>
            <th>Issuer</th>
            <th>Market Cap</th>
            <th>Status</th>
            <th>Execution Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.industry}</td>
              <td>{item.scrip_name}</td>
              <td>{item.issuer_name}</td>
              <td>{item.mktcap}</td>
              <td>{item.status}</td>
              <td>{item.execution_datetime_ist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <NavBar />
      {nseData.length > 0 && bseData.length === 0 ? (
        renderNSETable(nseData)
      ) : (
        renderBSETable(bseData)
      )}
    </>
  );
};

export default UserData;