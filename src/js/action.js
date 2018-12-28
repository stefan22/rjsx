import React, {Component} from 'react';
import '../scss/App.scss';

class Action extends Component {

  render() {
    let randomText = 'Your Todo list is empty, enter a few things first.';
    let randomAvail = 'Random Todo options available';
    return (
      <div className="action-comp">
        <div className="content-section">
          <div className="random text-center margin-top">
            {this.props.options.length > 0 ? <h4>{randomAvail}</h4> : <h4>{randomText}</h4>}
          </div>

          <button onClick={this.props.handleRandomTodo} className="button full-button action-button">
						Get a Random Todo (popup)
          </button>
          <h5 className="block">(It randomly assigns you a Todo)</h5>
        </div>
      </div>
    );
  }
} //Action


export default Action;
