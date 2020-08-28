import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; 

library.add(fas);

function Header() {
    return(
        <div className="Header">
            {/* Icon */}
            <Link to ="/products">
                <FontAwesomeIcon className="header_icon main" icon={['fas', 'home']} size='2x' />
            </Link>
            {/* Main Text */}
            <span>Shop</span>
            {/* Icon to cart */}
            <Link to="/cart">
                <FontAwesomeIcon className="header_icon link" icon ={['fas', 'shopping-cart']} size='2x'/>
            </Link>
        </div>
    )
}

export default Header;