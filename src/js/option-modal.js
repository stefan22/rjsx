import React, {Component} from 'react';
import Modal from 'react-modal';
import '../scss/option-modal.scss';

class OptionModal extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.props.openModal();
  }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    return (
      <div>
        <Modal className='selected-option'
          isOpen={this.props.isOpen}
          contentLabel={this.props.contentLabel}
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
