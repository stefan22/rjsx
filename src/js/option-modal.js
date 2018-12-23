import React, {Component} from 'react';
import Modal from 'react-modal';
import '../scss/option-modal.scss';

//Modal.setAppElement('#root .options');

class OptionModal extends Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.props.openModal();

  }

  // afterOpenModal() {
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    console.log(this);
    return (
      <div>
        <Modal className='selected-option'
          isOpen={this.props.selectedOption}
          //onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Selected Option"
        >
          <h3>Your Random option is:</h3>
          <h3 className='is-selected'>{this.props.selectedOption}</h3>
          <button
            className='close-modal'
            onClick={this.closeModal}>close
          </button>
          <p className='text-center'>Good luck with your option. Press the close button to continue.</p>


        </Modal>
      </div>
    );
  }


}


export default OptionModal;
