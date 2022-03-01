import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const sections = [
  {
    path: '/tab-1',
    label: 'Tab 1',
  },{
    path: '/tab-2',
    label: 'Tab 2',
  },{
    path: '/tab-3',
    label: 'Tab 3',
  },
];

function Nav() {
  return (
    <div className='wrapper nav'>
        {sections.map((section) => (
          <div key={section.path}>
              <NavLink className='nav-item' to={section.path}>{section.label}</NavLink>
          </div>
        ))}
    </div> 
  );
}

export default Nav;
