// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/logo-light.png'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='max-w'>
      <div className="navbar flex gap-8">
        <img className='w-44' src={logo} alt="logo" />
        <div className="w-full">
          <div className="w-full flex justify-between items-center">
            <input type="text" placeholder="Search" className="input input-bordered input-primary bg-transparent text-white" />
            <ul className='text-white flex gap-6 text-2xl'>
              <li><Link>Home</Link></li>
              <li><Link>News</Link></li>
              <li><Link>Destination</Link></li>
              <li><Link>Blog</Link></li>
              <li><Link>Contact</Link></li>
            </ul>
            <button className="btn btn-primary">Log In</button>
            {/* <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://picsum.photos/500/300?random" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;