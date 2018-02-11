import React, {Component} from 'react';
import './Location.css';
import {Dropdown} from '../Dropdown/Dropdown.js'

export class Location extends Component {

    onSelect = (property, city) => {
        const {start, end} = this.props.value;
        const value = {
            start,
            end,
            [property]: city
        };

        this.props.onChange(value);
    };

    render() {
        const locationDataArrival = {
            name: 'Location 1',
            data: [
                'Paris',
                'Moscow',
                'Milan',
                'Rome'
            ]
        };
        const locationDataDeparture = {
            name: 'Location 2',
            data: [
                'London',
                'Saint Petersburg',
                'Berlin',
                'Florence'
            ]
        };
        const {start, end} = this.props.value;

        return <div className="Location">
            <Dropdown {...locationDataArrival} value={start} onSelect={(city) => this.onSelect('start', city)}/>
            <div className="Location__arrow"/>
            <Dropdown {...locationDataDeparture} value={end} onSelect={(event) => this.onSelect('end', event)}/>
        </div>
    }
}
