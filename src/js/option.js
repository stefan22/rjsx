import React, {Component} from 'react';
import '../scss/options.scss';

class Option extends Component {
  render() {

    return (
      <div className='option-sitter'>
        <div className="optionItm">
          {this.props.optX}
        </div>



      </div>
    );
  }

} //Header



export default Option;
