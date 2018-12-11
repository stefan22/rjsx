import React, {Component} from 'react';
import Option from './option';
import '../scss/options.scss';

class Options extends Component {

  render() {
    console.log(this);
    return (

      <div className="all-options">

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
