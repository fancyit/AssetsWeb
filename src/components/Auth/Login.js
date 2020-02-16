import React, { Component } from 'react';
import { MDBBtn, MDBCol, MDBInput, MDBCard, MDBCardBody, MDBContainer, MDBRow } from 'mdbreact';
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
        console.log(this.state);
        
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
            <MDBContainer fluid style={{ "marginTop": "10px" }}>
                <MDBRow around center>
                    <MDBCol md="4" middle>
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={this.submit}>
                                    <p className="h4 text-center py-4">Sign in</p>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Name"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"                                            
                                            name="username"
                                            //value={this.state.username}
                                            onChange={this.change}
                                        />
                                        <MDBInput
                                            label="Your password"
                                            icon="envelope"
                                            group
                                            type="password"
                                            validate
                                            error="wrong"                                            
                                            name="password"
                                            //value={this.state.password}
                                            onChange={this.change}
                                        />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn className="red darken-4" onClick={this.submit}>
                                            Submit
                                        </MDBBtn>
                                    </div>
                                    {authError ? <p className="center red darken-4 white-text " style={{textAlign:"center"}}>{authError}</p> : null}
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
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