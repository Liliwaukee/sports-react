import React from 'react'

var buttonStyle = {
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: "block",
    height: "6vh",
    margin: "0 auto",
    width: "15vw"
  };

function Header ({ appName, user, onAuth, onLogout }) {
  function renderUserData () {
    return (
        
      <ul className='navbar right'>
        <li>
          <img
            width='32'
            className='avatar circle responsive-img'
            src={user.photoURL}
          />
        </li>
        <li>{user.displayName}</li>
        <li>
          <button
            style={ buttonStyle }
            className='waves-effect waves-light btn blue darken-1'
            onClick={onLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    )
  }

  function renderLoginButton () {
    return (
      <ul className='right'>
        <li>
          <button
          style={ buttonStyle }
            className=''
            onClick={onAuth}>
            Login with Google
            
          </button>
        </li>
      </ul>
    )
  }

  return (
    <nav className='blue darken-4'>
      <div className='nav-wrapper container'>
        <a className='left brand-logo'>{appName}</a>
        {user ? renderUserData() : renderLoginButton()}
      </div>
    </nav>
  )
}

export default Header
