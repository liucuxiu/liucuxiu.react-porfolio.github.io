import React from 'react';
import { CiUser, CiHome, CiCircleList, CiMail, CiStar } from 'react-icons/ci';

const SideBar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h1>Minh Tu</h1>

      <ul className="nav">
        <li>
          <CiHome className="icon"/>
          <a href="#home">Home</a>
        </li>
        <li>
          <CiUser className="icon"/>
          <a href="#about">About</a>
        </li>
        <li>
          <CiCircleList className="icon"/>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <CiStar className="icon"/>
          <a href="#work">Work</a>
        </li>
        <li>
          <CiMail className="icon"/>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;