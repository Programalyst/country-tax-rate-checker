import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css'

const NavBar: React.FC = () => {

    return (
        <div className='navBar'>
            <nav>
                <h3>FTC Prototyping</h3>
                <ul className='nav-links'>
                    <Link to='/taxRates'><li>Tax Rates</li></Link>
                    <Link to='/networkCompanies'><li>List of ANCs</li></Link>
                    <Link to='/items'><li>Items List</li></Link>
                    <Link to='/about'><li>About</li></Link>
                </ul>
            </nav>
        </div>
    )

}

export default NavBar;