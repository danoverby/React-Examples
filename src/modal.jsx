import React from 'react';
import { css } from 'glamor';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal: this.props.modal
    }
    this.modal = this.modal.bind(this);
  }

  modal() {
    this.setState({modal: true});
  }

  render() {
console.log(this.props)
    const cssBackdrop = css({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'black',
      opacity: .3,
      zIndex: 1
    });

    const cssModal = css({
      display: 'block',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      height: '50%',
      background: 'white',
      boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.8)',
      zIndex: 2,
      opacity: modal
    });

    const cssClose = css({
      position: 'absolute',
      top: 5,
      right: 10,
      color: '#969696',
      fontSize: '40px',
      cursor: 'pointer',
      ':hover' : {transitionDuration: '.25s', color: 'darkgray'}
    });

    const cssVline = css({
      position: 'absolute',
      left: '50%',
      top: '10%',
      bottom: '10%',
      borderLeft: '6px solid black'
    });

    let cssMain = css({
      transition: 'all ease 1s',
      opacity: (this.state.modal) ? 0 : 1
    });

    return <div {...cssMain}>
      <div {...cssBackdrop} />
      <div {...cssModal}>
        <i className="fa fa-close" {...cssClose} onClick={this.modal} />
        <div {...cssVline}/>
      </div>
    </div>;
  }
}