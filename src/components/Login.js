import React from "react";
import '../css/app.scss';

class Login extends React.Component {
  render() {
    return (
      <form className="login-wrapper">
        <div>
          <label htmlFor="">Email</label>
          <div>
            <input type="text" placeholder="Email" />
          </div>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <div>
            <input type="text" placeholder="Password" />
          </div>
        </div>
        <div className="">
            <button>
                Login
            </button>
        </div>
      </form>
    ); // jsx Babel, Emmet
  }
}

export default Login;
