import React, { useEffect } from 'react';
import './style.css';
import logo from './images/logo.png';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from './Context';

const NavBar = () => {
  const { name, setName, nseData, bseData } = useGlobal();
  const navigate = useNavigate();

  useEffect(() => {
    if (nseData.length > 0 || bseData.length > 0 || name.trim() !=='') {
      navigate('/api');
    } else {
      navigate('/');
    }
  }, [nseData, bseData, navigate]);

  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </a>
        <form className="d-flex mx-auto w-50">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
};

export default NavBar;