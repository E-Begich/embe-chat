import React, { useState } from 'react';
import "./UserLogin.scss";


function UserLogin({onUserLogin}) {
    const [username, setUsername] = useState('');
    const [error, setError] = useState("");

    const handleSubmitMemberName = (e) => {
        e.preventDefault();
        if (!username || !username.length) {
            setError("Enter your name!");
          } else {
            setError(null);
            onUserLogin(username);
          }
        };

    return (
<div className="container">
<div className="formWrapper">
    <span className="logo">EmBe Chat</span>
        <span className="title">Login</span>
            <form className="form" onSubmit={handleSubmitMemberName}> 
                <p id="name">Name:</p>
                 <input className="formName" type="text"  onChange={(e) => setUsername(e.target.value)} placeholder='Enter your name' /> 
                <button>Sign in</button>
                <div className="error">{error}</div>
            </form>
</div>

</div>
    );
}

export default UserLogin;