import React from 'react';
import { css, style } from 'glamor';
import ButtonOnOff from './button-onoff.jsx'

export default class extends React.Component {
  constructor(props) {
    super();
    this.state = {}
    this.calculate = this.calculate.bind(this)
  }

  componentDidMount() {
    this.setState({rows: this.props.rows.map(row => row.value)})
  }

  calculate(idx, btn) {
    let rows = Object.assign([], this.state.rows);
    rows[idx] = (btn === "ON") ? this.props.rows[idx].fn() : '0'
    this.setState({rows})
  }

  render() {
    if (this.state.rows == undefined) return [];
    let v = this.props.rows.filter(row => Object.keys(row) === "value" )
    let z = this.props.rows.forEach(row => {return row.value})

    const css = {
      table: style({
        fontFamily: 'Futura Light',
        color: '#646464',
        backgroundColor: 'white',
        width: '100%',
        margin: '0 2.5% 2.5% 2.5%',
        borderCollapse: 'collapse',
        tableLayout: 'fixed',
        width: this.props.width
      })
    }

    let tableRows = this.props.rows.map((row, i) => {
      let rowColor = style({
        backgroundColor: (i%2) ? '#bad6ed' : 'white',
        textAlign: 'center',
        height: 65,
        ':hover': {
          transitionDuration: '.25s',
          backgroundColor: '#ebebe4',
          cursor: 'pointer',
        }
      });

      let cssInput = style({
        textAlign: 'center',
        fontSize: '20px',
        height: 30,
        width: 125
      });

        return <tr key={i} {...rowColor} style={{fontSize: '26px'}}>
          <td>{ row.title }</td>
          <td><ButtonOnOff idx={i} calculate={this.calculate}/></td>
          <td><input {...cssInput} type="text" placeholder="kW" id="heat-pump-text-box" value={this.state.rows[i] + " kW"} /></td>
        </tr>
      })

    return (
      <table {...css.table}>
        <tbody>
          { tableRows }
        </tbody>
      </table>
    )
  }
}