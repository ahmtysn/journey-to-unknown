import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Direction({ title, path, onClick, autoFocus = true, type = '' }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (autoFocus) buttonRef.current.focus();
  }, []);

  return (
    <div className='direction-btn'>
      <Link type='submit' to={path} onClick={onClick} ref={buttonRef}>
        {type ? <button type={type}>{title}</button> : title}
      </Link>
    </div>
  );
}

export default Direction;
