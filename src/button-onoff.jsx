import React from 'react';
import { css } from 'glamor';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLabel: "OFF",
    }
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    let btnValue = (this.state.btnLabel === 'OFF') ? 'ON' : 'OFF';
    this.setState({btnLabel: btnValue});
    this.props.calculate(this.props.idx, btnValue);
  }

  render() {
    // red button colors: #FF2B2B, #bc0000
    // green button colors: #00c61d, #008c17
    let cssBtn = css({
      height: '40px',
      width: '85px',
      borderRadius: '10%',
      fontFamily: 'Futura Light',
      letterSpacing: '1px',
      // fontWeight: 600,
      fontSize: '16px',
      color: 'white',
      cursor: 'pointer',
      outline: 'none',
      ':hover': {
        filter: 'contrast(125%)',
        // border: 'dark-gray'
      },
      background: (this.state.btnLabel === 'ON')
        ? 'repeating-radial-gradient(#03C6FC, #0071b2 50%)'
        : 'repeating-radial-gradient(#ffbd2d, #ff5c27 50%)'
    });

    return (
        <button {...cssBtn} onClick={this.toggleButton}>{this.state.btnLabel}</button>
    );
  }
}