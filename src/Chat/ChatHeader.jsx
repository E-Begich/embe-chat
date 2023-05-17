import React from 'react';
import "./ChatHeader.scss";


function Header({userName, member, logout}) {
    return(
        <div id="header-div">
          <div className='logo2' id='Logo2'>EmBeChat</div>
        {
          (member.id) ?
          (<div className='welcome-message'>Welcome {userName}!<button className='Logout' onClick={logout}>Logout</button></div>) :
          (<div></div>)
}
      </div>
  );
}

export default Header;