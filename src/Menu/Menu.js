import React, {Component} from 'react';
import './Menu.css';


export class Menu extends Component {

    state={
        isMenuVisible: false
    };

    toggleMenu = () => {
        this.setState(prevState => ({
            isMenuVisible: !prevState.isMenuVisible
        }));
    };

    render() {

        return (
            <div className="Menu">
                <div className={this.state.isMenuVisible ? 'Menu__button Menu__button--opened' : 'Menu__button'}
                     onClick={this.toggleMenu}/>
                {this.state.isMenuVisible &&
                <div className="container__menu">
                    <div className="menu__name">
                        <p>Welcome</p>
                        <p className="name_yellow">Johnathan</p>
                        <div className="settings__icon"/>
                    </div>
                    <div className="menu__usual">
                        <div className="img__check"/>
                        <div>AutoRecharge</div>
                    </div>
                    <div className="menu__usual">
                        <div className="img__notification"/>
                        <div>Notifications</div>
                    </div>
                    <div className="menu__usual">
                        <div className="img__newsfeed"/>
                        <div>News Feed</div>
                    </div>
                    <div className="menu__usual">
                        <div className="img__location"/>
                        <div>Location</div>
                    </div>
                    <div className="menu__usual">
                        <div className="img__wallet"/>
                        <div>Wallet</div>
                    </div>
                    <div className="menu__usual">
                        <div className="img__calculator"/>
                        <div>Consumption Calculator</div>
                    </div>
                    <div className="menu__usual">
                        <div className="img__hotline"/>
                        <div>Consumption Calculator</div>
                    </div>
                </div>
                }
            </div>
        )

    }
}
