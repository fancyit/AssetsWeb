import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const NavBar = (props) => {
    const { isLoggedIn } = props
    const links = isLoggedIn ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <div className="navbar-fixed">
            <nav className="nav.nav-wrapper #c62828 red darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo">Assets management</Link>
                    {links}
                </div>
            </nav>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
};
export default connect(mapStateToProps)(NavBar);