import React, { Component } from 'react';
import { httpPost } from '../../helpers/network';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password:'',
            confirmedpassword: ''
        }
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
        if(this.state.password!==this.state.confirmedpassword){
            alert("Password confirmation should match the password!!!")
            return;
        }
        const endPoint = 'Account/Register';
        const data = new { 
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        httpPost(endPoint, data)
            .then(res => {
                if (!res.ok) { return; }
                return res.json()
            })
            .then(x => {                
                this.setState({
                    username: x.username,
                    email: x.email,
                    role: x.userRole
                });
                                       
            })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.submit} className="white col s6">
                        <h5 className="grey-text text-darken-3">Sign Up</h5>
                        <div className="input-field">
                            <label htmlFor='username'>User name</label>
                            <input type="text" name="username" onChange={this.change} />
                        </div>
                        <div className="input-field">
                            <label>E-mail address</label>
                            <input type="text" name="email" onChange={this.change} />
                        </div>
                        <div className="input-field">
                            <label>Password</label>
                            <input type="password" name="password" onChange={this.change} />
                        </div>                        
                        <div className="input-field">
                            <label>Password confiramtion</label>
                            <input type="password" name="confirmedpassword" onChange={this.change} />
                        </div>                        
                    </form>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.submit}>Submit
                    <i className="material-icons right">send</i>
                </button>
            </div>
        )
    }
}
export default SignUp;