import React, {Component} from 'react';
import '../scss/options.scss';

class Options extends Component {

  optionsArr() {
    let arr = this.props.options;
    arr = arr.map((itm,i) => {
      return <div className='optionItm' key={i} optkey={i}>{itm.charAt(0).toUpperCase() + itm.slice(1)}</div>;
    });
    return arr;
  }

  render() {
    console.log(this.optionsArr());
    return (

      <div className="all-options">
        {this.optionsArr()}
      </div>

    );
  }

} //Options





export default Options;
