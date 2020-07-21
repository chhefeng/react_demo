import React from "react";


class Login extends React.Component {

    handleSubmit = event => {
        // prevent default behaviour
        event.preventDefault();


        // redirect to index page
        this.props.history.push('/');
    }

    render() {
        return ( 
            <div className="login-wrapper">
                <form action="" className="box login-box" onSubmit={this.handleSubmit}>
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
