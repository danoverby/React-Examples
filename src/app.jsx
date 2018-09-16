import React from 'react';
import Test from './test.jsx'
import ButtonOnOff from './button-onoff.jsx'
import BuildTable from './build-table.jsx'
import GridTest from './grid-test.jsx'
import MyModal from '../src/my-modal.jsx'
import Modal from './modal.jsx';
import AreaChart from './area-chart.jsx';
import Tooltip from './tooltip.jsx'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: 'hidden',
    }
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    console.log("showModal")
    this.setState({modalActive: 'visible'})
  }

  render() {
    
    let rows = [
        {title: "Row 1 Title", value: 0, fn: () => {return 1234567}},
        {title: "Row 3 Title", value: 0, fn: () => {return 345}},
        {title: "Daniel was here", value: 0, fn: () => {return 100*555}},
        {title: "Row 4 Title", value: 0, fn: () => {return 4567}},
        {title: "Row 5 Title", value: 0, fn: () => {return 67}},
        {title: "Hannah's Row", value: 0, fn: () => {return 67}},
        {title: "Row 5 Title", value: 0, fn: () => {return 3*6}},
      ]
    
    return <div>
    <Tooltip />  
      <div style={{margin: "30px"}} />
      {/* <AreaChart /> */}
      <button onClick={this.showModal} style={{height: '50px', fontSize: '24px', marginBottom: '25px', border: '5px inset', borderRadius: '10px',outline:'none'}}>MODAL</button>
      {/* <Modal modalActive={this.state.modalActive} /> */}
      <MyModal modal={this.state.modalActive} width={'75%'} height={'75%'}>
        <BuildTable rows={rows} />
      </MyModal>
      {/* <GridTest /> */}
      {/* <BuildTable rows={rows} width={'100%'} /> */}
    </div>
  }
}