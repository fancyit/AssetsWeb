import React, { Component } from 'react';
import { signIn } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ' '
        };
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }
    change(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submit = (event) => {
        event.preventDefault();
        // if () {
        //     console.log('You already in');
        //     return
        // }
        this.props.signIn(this.state);
    };
    render() {
        const { isLoggedIn } = this.props;
        if (isLoggedIn) return <Redirect to='/' />;
        const { authError } = this.props;
        return (
            <div className="container center-align">
                <div className="row">
                    <form onSubmit={this.submit} className="white col s4 push-s4 center-align">
                        <h5 className="grey-text text-darken-3">Sign In</h5>
                        <div className="input-field">
                            <label htmlFor='username'>User name</label>
                            <input type="text" name="username" onChange={this.change} />
                        </div>
                        <div className="input-field">
                            <label>Password</label>
                            <input type="password" name="password" onChange={this.change} />
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.submit}>Submit
                            <i className="material-icons right">send</i>
                        </button>
                        {authError ? <p className="center red">{authError}</p> : null}
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        isLoggedIn: state.auth.isLoggedIn
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);