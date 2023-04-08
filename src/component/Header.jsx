import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link to='/'  className="nav-link active" aria-current="page" href="#">Active</Link  >
  </li>
  <li className="nav-item">
    <Link to='/Product' className="nav-link" href="#">Link</Link  >
  </li>
  <li className="nav-item">
    <Link  className="nav-link" href="#">Link</Link  >
  </li>
  <li className="nav-item">
    <Link  className="nav-link disabled">Disabled</Link  >
  </li>
</ul>
        </div>
    );
};

export default Header;