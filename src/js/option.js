import React, {Component} from 'react';
import AddOption from './add-option';
import '../scss/options.scss';

class Option extends Component {
  render() {

    return (
      <div>
        <div className="optionItm">
          {this.props.optX}
        </div>



      </div>
    );
  }

} //Header



export default Option;
