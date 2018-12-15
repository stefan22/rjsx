import React, {Component} from 'react';
import Option from './option';
import '../scss/options.scss';

class Options extends Component {

  render() {

    return (
      <div className="options-sitter">
        <button
          className="remove-options" type="button"
          onClick={this.props.handleDeleteOptions}>
          Remove All items
        </button>
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
