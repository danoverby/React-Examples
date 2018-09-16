import React from 'react';
import { style } from 'glamor';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {modalActive: this.props.modal}
    this.isModal = this.isModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.modal !== this.state.modalActive) {
      this.setState({modalActive: nextProps.modal});
    }
  }

  isModal() {
    this.setState({modalActive: 'hidden'});
  }

  render() {
    if(!this.state.modalActive) return null;

    const css = {
      backdrop: style({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: .3,
        zIndex: 1
      }),
      modal: style({
        display: 'block',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: this.props.width,
        height: this.props.height,
        background: 'white',
        boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.8)',
        zIndex: 2,
      }),
      close: style({
        position: 'absolute',
        top: 5,
        right: 10,
        color: '#969696',
        fontSize: '40px',
        cursor: 'pointer',
        ':hover' : {transitionDuration: '.25s', color: 'darkgray'}
      })
    }

    const cssVline = style({
      position: 'absolute',
      left: '50%',
      top: '10%',
      bottom: '10%',
      borderLeft: '6px solid black'
    });

    let cssMain = style({
      transition: 'all ease .5s',
      visibility: this.state.modalActive,
      opacity: (this.state.modalActive === 'visible') ? 1 : 0
    });

    return <div {...cssMain}>
      <div {...css.backdrop} />
      <div {...css.modal}>
        <i className="fa fa-close" {...css.close} onClick={this.isModal} />
        { this.props.children }
        <div {...cssVline}/>
      </div>
    </div>;
  }
}