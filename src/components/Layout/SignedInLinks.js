import React from 'react';
import { MDBNavItem, MDBNavLink, MDBNavbarNav } from 'mdbreact';

const SignedInLinks = () => {
    return (

            <MDBNavbarNav right>
                <MDBNavItem>
                    <MDBNavLink className="navLink" to="/AddAsset">New asset</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="navLink" to="/">Sign out</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>        
    )
}
export default SignedInLinks