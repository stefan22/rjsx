import React, {Component} from 'react';

class Action extends Component {

  render() {
    const question = 'Q: what would you like to do?';
    return (
      <div>
        <h3>{question}</h3>
        <hr className="divider" />

      </div>
    );
  }

} //Header



export default Action;
