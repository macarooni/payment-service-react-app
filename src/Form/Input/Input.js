import React, {Component} from 'react';
import './Input.css';

export class Input extends Component {

    onChange = (event = {}) => {
        const {value} = event.target;

        this.props.onChange(value);
    };

    render() {
        const {label, value} = this.props;

        return (
            <div className="Input">
                <label className="Input__label" htmlFor={label}>{label}</label>
                <input id={label}
                       type="text"
                       className="Input__input"
                       placeholder=""
                       value={value}
                       onChange={this.onChange}/>
            </div>
        );
    }
}
