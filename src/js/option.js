import React, {Component} from 'react';
import '../scss/options.scss';

class Option extends Component {
  render() {
    console.log(this);
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
