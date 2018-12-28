import React, {Component} from 'react';
import '../scss/App.scss';

class Option extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo() {
    return this.props.removeTodo(this.props.itmkey);
  }

  render() {
    return (
      <div className="option-comp clearfix">
        <div className="todo" key={this.props.itmkey}>
          {this.props.itmkey}. {this.props.itm}
          <button className="button .square-button red-button" onClick={this.removeTodo}>
						Delete Todo
          </button>
        </div>
      </div>
    );
  }
} //Option


export default Option;
