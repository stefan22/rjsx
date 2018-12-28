import React, {Component} from 'react';
import Modal from 'react-modal';
import SingleTodo from './single-todo';
import '../scss/popup-modal.scss';

class LoadTodos extends Component {
  render() {
    return (
      <div>
        <Modal className='load-todos'
          isOpen={!!this.props.loadtodos}
          onRequestClose={this.props.handleClosingLoadTodos}//click outside box
          contentLabel='These are your Todos'
        >
          <h3>Your Todo List:</h3>
          {
            (this.props.loadtodos) &&

            <SingleTodo loadtodos={this.props.loadtodos} />
          }
          <button
            className='close-modal'
            onClick={this.props.handleClosingLoadTodos}>close
          </button>
          <p className='text-center'>Good luck completing the tasks. Press the close button to continue.</p>
        </Modal>
      </div>
    );
  }


}





export default LoadTodos;
