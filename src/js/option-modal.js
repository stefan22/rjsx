import React, {Component} from 'react';
import Modal from 'react-modal';
import '../scss/popup-modal.scss';

class OptionModal extends Component {
  render() {
    return (
      <div>
        <Modal className='selected-option'
          isOpen={!!this.props.selectedOption}
          onRequestClose={this.props.closeModal}//click outside box
          contentLabel='Selected Option'
        >
          <h3>Your Random option is:</h3>
          {
            this.props.selectedOption &&
            <h3 className='is-selected'>{this.props.selectedOption}</h3>
          }
          <button
            className='close-modal'
            onClick={this.props.closeModal}>close
          </button>
          <p className='text-center'>Good luck with your option. Press the close button to continue.</p>
        </Modal>
      </div>
    );
  }


}


export default OptionModal;
