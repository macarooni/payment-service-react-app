import React, {Component} from 'react';
import './Form.css';
import {Location} from './Location/Location.js';
import {Input} from './Input/Input.js';
import {InputNum} from './InputNum/InputNum.js';
import {Button} from './Button/Button.js';

export class Form extends Component {
    state = {
        account: '',
        amount: '',
        price: '',
        location: {
            start: '',
            end: ''
        }
    };

    onChange = (value, name) => {
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="Form">
                <Location value={this.state.location} onChange={(value) => this.onChange(value, 'location')}/>
                <Input label="AccountID" value={this.state.account} onChange={(value) => this.onChange(value, 'account')}/>
                <InputNum label="Amount" value={this.state.amount} onChange={(value) => this.onChange(value, 'amount')}/>
                <Input label="Final Price" value={this.state.price} onChange={(value) => this.onChange(value, 'price')}/>
                <Button/>
            </div>
        );
    }
}
