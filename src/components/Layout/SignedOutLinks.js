import React from 'react';
import { MDBNavItem, MDBNavLink, MDBNavbarNav } from 'mdbreact';

const SignedOutLinks = () => {
    return (
        <MDBNavbarNav right>
            <MDBNavItem>
                <MDBNavLink className="navLink" to="/Login">Sign in</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink className="navLink" to="/SignUp">Sign up</MDBNavLink>
            </MDBNavItem>
        </MDBNavbarNav>
    )
}
export default SignedOutLinks