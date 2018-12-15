import React, {Component} from 'react';
import '../scss/options.scss';

class Action extends Component {

  render() {
    //let randomResponse = this.props.handleRandomDo();

    console.log(this);
    const title = 'What should I randomly buy?'
    const question = 'Random do ..buy';

    return (
      <div className='button-sitter'>
        <h3>{title}</h3>
        <button
          onClick={this.props.handleRandomDo}
          disabled={!this.props.hasOptions}
          className='question-wrap' type='button'>
          {question}
        </button>


        <hr className='divider' />
      </div>
    );
  }

} //Header



export default Action;
