import React from 'react'
import {Link} from 'react-router-dom';
import Close from '../svg/times-solid.svg';
import Cart from '../svg/shopping-cart-solid.svg';
import Menu from '../svg/bars-solid.svg';
import '../css/Header.css';

class Header extends React.Component {

    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render(){
        const {toggle} = this.state;
        return (
            <header>
                <div className="header__menu" onClick={this.menuToggle} >
                    <img src={Menu} alt="Menu" width="20px" />
                </div>

                <div className="header__logo">
                    <h1><Link to="/">Shoes</Link></h1>
                </div>

                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login / Register</Link></li>
                        <li className="header__close" onClick={this.menuToggle}>
                            <img src={Close} alt="Close" width='20px' />
                        </li>
                    </ul>
                    <div className="header__cart">
                        <span>0</span>
                        <Link to="/cart">
                            <img src={Cart} alt="Cart" width='20px' />
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
