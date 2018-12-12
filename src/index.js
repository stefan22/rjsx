import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';

class CreateRow extends Component {

  createRow() {
    return (
      <div className="row">
        <button>[O]</button>
        <button>[O]</button>
        <button>[O]</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.createRow()}
      </div>
    );
  }

}

class Board extends Component {
  render() {
    return (
      <div>
        <div id="board">
          <h1>Board Game</h1>
          <div>
            <CreateRow />
            <CreateRow />
            <CreateRow />

          </div>
        </div>
      </div>
    );
  }


}


class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
