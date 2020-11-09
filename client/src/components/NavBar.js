import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OpenContext } from '../components/OpenContext';
import { BsHouseDoor } from 'react-icons/bs';
import { IoMdRefresh } from 'react-icons/io';
import { FaRegCommentDots } from 'react-icons/fa';

function NavBar() {
  const { open, setOpen } = useContext(OpenContext);

  const resetStory = () => {
    setOpen({
      isOpenC1: false,
      isOpenC2: false,
      isOpenC3: false,
      isOpenC4: false,
    });
  };

  const hideNavBar = () => {
    setOpen({ ...open, closeNav: true });
  };
  const { closeNav } = open;

  return (
    <div className={closeNav ? 'hidden' : 'navbar'}>
      <Link to='/'>
        <BsHouseDoor />
      </Link>
      <Link to='/chapter1'>I</Link>
      <Link to='/chapter2'>II</Link>
      <Link to='/chapter3'>III</Link>
      <Link to='/chapter4'>IV</Link>
      <Link to='/' onClick={resetStory}>
        <IoMdRefresh />
      </Link>

      <Link to='/form' onClick={hideNavBar}>
        <FaRegCommentDots />
      </Link>
    </div>
  );
}

export default NavBar;
