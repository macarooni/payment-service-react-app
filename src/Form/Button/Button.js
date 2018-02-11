import React, {Component} from 'react';
import './Button.css';

export class Button extends Component {

  render() {

    return (
        <div className="Button Button--print" onClick={() => window.print()}/>
    )
  }
}
