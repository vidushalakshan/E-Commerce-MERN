import React from 'react';
import { logo } from '../assest';

const Header = () => {
  return (
    <header className='h-16 shadow-md'>
      <div className='container flex items-center h-full px-4 mx-auto'>
        <div>
            <img src={logo} alt="Nav Logo" className='w-[135px] h-[90px]'/>
        </div>
      </div>
    </header>
  )
}

export default Header;