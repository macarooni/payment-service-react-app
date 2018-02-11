import React, {Component} from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__wrap">
                    <div className="header__logo">
                        <strong className="Header__logo-title Header__logo-title--bold">Your</strong>
                        <span>Logo</span>
                    </div>
                    <div className="header__menu">
                        <span className="header__menu--buttons active">Home</span>
                        <span className="header__menu--buttons">About us</span>
                        <span className="header__menu--buttons">Gallery</span>
                        <span className="header__menu--buttons">Sign up</span>
                    </div>
                </div>
            </div>
        )
    }
}
