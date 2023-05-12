import React from 'react';



function Header({userName, member, logout}) {
    return(
        <div className="header-div">
        {
          (member.id) ?
          (<div className='welcome-message'>Welcome {userName}!<button className='Logout' onClick={logout}>Logout</button></div>) :
          (<div></div>)
}
      </div>
  );
}

export default Header;