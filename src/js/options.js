import React, {Component} from 'react';
import Option from './option';
import '../scss/options.scss';

class Options extends Component {
  constructor(props) {
    super(props);
    this.handleRemovalAll = this.handleRemovalAll.bind(this);
  }

  handleRemovalAll() {
    let arr = this.props.options;
    console.log(arr);
  }

  render() {
    console.log(this);
    return (

      <div className="all-options">
        <button className="question-wrap" type="button"
          onClick={this.handleRemovalAll}>Remove All items</button>

        {
          this.props.options.map((itm,key) => {
            return <Option key={key} optX={ <div optkey={key}>{itm}</div>  } />;

          })
        }





      </div>

    );
  }

} //Options





export default Options;
