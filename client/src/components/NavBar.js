import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OpenContext } from '../components/OpenContext';
import { BsHouseDoor } from 'react-icons/bs';
import { IoMdRefresh } from 'react-icons/io';
import { FaRegCommentDots } from 'react-icons/fa';

function NavBar() {
  const { setOpen } = useContext(OpenContext);

  const resetStory = () => {
    setOpen({
      isOpenC1: false,
      isOpenC2: false,
      isOpenC3: false,
      isOpenC4: false,
    });
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <BsHouseDoor />
      </Link>

      <div className='hidden'>
        <Link to='/chapter1'>I</Link>
        <Link to='/chapter2'>II</Link>
        <Link to='/chapter3'>III</Link>
        <Link to='/chapter4'>IV</Link>
        <Link to='/' onClick={resetStory}>
          <IoMdRefresh />
        </Link>
      </div>

      <Link to='/form'>
        <FaRegCommentDots />
      </Link>
    </div>
  );
}

export default NavBar;
