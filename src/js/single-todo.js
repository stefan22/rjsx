import React, {Component} from 'react';
import '../scss/popup-modal.scss';

class SingleTodo extends Component {
  render() {
    return (
      <div className='is-loaded'>
         <ul>
         {
           this.props.loadtodos.split(',').map((itm,index) => {
            return <li key={index} tokey={index}>{itm}</li>
           })
          }
          </ul>
      </div>
    );
  }

}


export default SingleTodo;
