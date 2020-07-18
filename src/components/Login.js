import React from "react";


class Login extends React.Component {
    render() {
        return (
            <div className="login-wrapper">
                <form action="" className="box login-box">
                    <div className="field">
                        <label className="label"></label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Email" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label"></label>
                        <div className="label">
                            <input className="input" type="text" placeholder="password" />
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-fullwidth is-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;