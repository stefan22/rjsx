import React, {Component} from 'react';
import Option from './option';
import '../scss/App.scss';

class Options extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(itm) {
    this.props.removeTodo(itm);
  }

  render() {
    return (
      <div className="options-comp">
        <div className="content-section margin-top">
          <h3>Options</h3>
          <div className="options options-container">
            {this.props.options.map((itm, index) => {
              return <Option removeTodo={this.removeTodo} key={index} itmkey={index} itm={itm} />;
            })}
          </div>
        </div>
      </div>
    );
  }
} //Options


export default Options;
