import React, {Component} from 'react';
import '../scss/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['oranges','bananas','grapes']
    };

  }

  render() {
    //console.log(this);
    let title='App isTop Component';
    return (
      <div className='app-comp'>
        <h1>{title}</h1>
        <hr className='divider' />

        <Header />

        <Action />

        <Options options={this.state.options} />



        <AddOption />
      </div>
    );
  }
}


class Header extends Component {
  render() {
    let subtitle='Adding an item to a todo list';
    return (
      <div className='header-comp'>
        <h3>{subtitle}</h3>
        <p>Header Component</p>
      </div>
    );
  }
}


class Action extends Component {

  handleRandom() {
    console.log('random');
  }

  render() {
    //console.log(this);
    return (

      <div className='action-comp'>
        <p>Use button to add a random todo.</p>
        <button onClick={this.handleRandom} className='action-button'>
           Add a Random Item
        </button>
      </div>
    );
  }
}



class Options extends Component {
  render() {
    console.log(this);
    return (
      <div className='options-comp'>
        <ul>
          {
            this.props.options.map((itm,index) => {
              return (
                <Option key={index} opkey={index} option={itm}  />
              );
            })
          }
        </ul>
      </div>
    );
  }
}


class Option extends Component {
  render() {
    console.log(this);
    return (
      <li key={this.props.opkey}>{this.props.option}</li>
    );
  }
}

class AddOption extends Component {
  render() {
    return (
      <div className='addoption-comp'>
        <p>AddOption Component</p>
      </div>
    );
  }
}









export default App;
