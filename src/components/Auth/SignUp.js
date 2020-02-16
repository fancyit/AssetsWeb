import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon } from 'mdbreact';
import { signUp, signIn } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmedpassword: '',
            modal: false
        }
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }
    componentDidUpdate() {    
        if(this.props.registrationMessage === 'Registration Successful' && !this.state.modal && !this.state.isLoggedIn) this.toggle();               
    }
    change(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submit = (event) => {
        event.preventDefault();
        if (this.state.password !== this.state.confirmedpassword) {
            alert("Password confirmation should match the password!!!");
            return;
        }
        let data = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        this.props.signUp(data);
        
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleLogin = () => {
        let data = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.signIn(data);
        this.setState({
            modal: !this.state.modal
        })
    }
    render() {
        const { signUpError, registrationMessage } = this.props;
        if (this.props.isLoggedIn) return <Redirect to='/Login' />;
        return (
            <div>
                <MDBContainer fluid style={{ "marginTop": "10px" }}>
                    <MDBRow around center>
                        <MDBCol md="4" middle>
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.submit}>
                                        <p className="h4 text-center py-4">Регистрация</p>
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
                                                label="E-mail address"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                name="email"
                                                //value={this.state.password}
                                                onChange={this.change}
                                            />
                                            <MDBInput
                                                label="Password"
                                                icon="envelope"
                                                group
                                                type="password"
                                                validate
                                                error="wrong"
                                                name="password"
                                                //value={this.state.password}
                                                onChange={this.change}
                                            />
                                            <MDBInput
                                                label="Password confirmation"
                                                icon="envelope"
                                                group
                                                type="password"
                                                validate
                                                error="wrong"
                                                name="confirmedpassword"
                                                //value={this.state.password}
                                                onChange={this.change}
                                            />
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn className="red darken-4" onClick={this.submit}>
                                                Зарегистрироваться
                                            </MDBBtn>
                                        </div>
                                        {signUpError ? <p className="center red darken-4 white-text " style={{ textAlign: "center" }}>{signUpError[0]}</p> : null}
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                {/* Modal form starts */}
                <MDBContainer >
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle} >
                        <MDBModalHeader>
                            <MDBIcon icon="lock-open" />
                        </MDBModalHeader>
                        <MDBModalBody>
                            <p className="center" style={{ textAlign: "center" }}>{registrationMessage}</p>                        
                            {/* <form className="mx-3 grey-text">
                            <MDBInput label="Asset name" />
                            <MDBInput label="Asset category" />
                            <MDBInput label="Owner" />
                            <MDBInput label="Supplier" />
                            <MDBInput label="State" />
                            <select className="browser-default custom-select" placeholder="deps">
                                {depsOpts}
                            </select>
                        </form> */}
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                            <MDBBtn color="primary" onClick={this.handleLogin}>Sign in</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        signUpError: state.auth.signUpError,
        registrationMessage: state.auth.registrationMessage,
        isLoggedIn: state.auth.isLoggedIn
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds)),
        signIn: (creds) => dispatch(signIn(creds))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);