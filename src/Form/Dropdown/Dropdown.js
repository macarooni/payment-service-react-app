import React, {Component} from 'react';
import './Dropdown.css';

export class Dropdown extends Component {

    state = {
        isListVisible: false
    };

    toggleList = () => {
        this.setState(prevState => ({
            isListVisible: !prevState.isListVisible
        }))
    };

    onClick = (city) => {
        this.setState({
            isListVisible: false
        }, () => {
            this.props.onSelect(city);
        })
    };

    render() {
        const {data, name, value} = this.props;

        return (
            <div className="Dropdown">
                <div className="Dropdown__value" onClick={this.toggleList}>
                    {value || name}
                </div>
                {this.state.isListVisible &&
                <ul className="Dropdown__list">
                    {data.map((city) => (
                        <li onClick={() => this.onClick(city)}>{city}</li>
                    ))}
                </ul>
                }
            </div>
        );
    }
}
