import React, {Component} from 'react';
import '../scss/options.scss';

class Action extends Component {

  handleQuestion() {
    console.log('questions handler clicked');
  }

  render() {
    const question = 'Q: what would you like to do?';
    return (
      <div>
        <button className="question-wrap" type="button" onClick={this.handleQuestion}>{question}</button>
        <hr className="divider" />

      </div>
    );
  }

} //Header



export default Action;
