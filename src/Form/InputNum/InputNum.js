import React from 'react';
import {Input} from '../Input/Input';
import './InputNum.css';

export class InputNum extends Input {

    onClick = (incr) => {
        const {value} = this.props;

        this.props.onChange(+(value || 0) + incr);
    };

    render() {
        const {label, value} = this.props;

        return <div className="Input">
            <label className="Input__label" htmlFor={label}>{label}</label>
            <input id={label}
                   type="text"
                   className="Input__input"
                   placeholder=""
                   value={value}
                   onChange={this.onChange}/>
            <button className="InputNum__button InputNum__button--decrease" onClick={() => this.onClick(-1)}/>
            <button className="InputNum__button InputNum__button--increase" onClick={() => this.onClick(1)}/>
        </div>
    }
}
