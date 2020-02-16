import React from 'react'
import { MDBNavbar, MDBNavbarBrand } from 'mdbreact';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const NavBar = (props) => {
    const { isLoggedIn } = props
    const links = isLoggedIn ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        // <div className="navbar-fixed">
        //     <nav className="nav.nav-wrapper #c62828 red darken-3">
        //         <div className="container">
        //             <Link to='/' className="brand-logo">Assets management</Link>
        //             {links}
        //         </div>
        //     </nav>
        // </div>
        <div>
            <MDBNavbar className="danger-color-dark sticky-top" dark expand="md" scrolling style={{ "marginBottom": "15px" }}>                
                    <MDBNavbarBrand href="/">
                        <strong className="white-text" style={{ "fontSize": "1.4em" }}>Assets Management</strong>
                    </MDBNavbarBrand>                
                {links}
            </MDBNavbar>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
};
export default connect(mapStateToProps)(NavBar);