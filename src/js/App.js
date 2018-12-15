import React, {Component} from 'react';
import Action from './action';
import Header from './header';
import Options from './options';
import AddOption from './add-option';
import '../scss/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleRandomDo = this.handleRandomDo.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: ['milk','oranges','grapes','berries'],
      isRandom: '',
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleRandomDo() {
    let options = this.state.options;
    let random = Math.floor(Math.random() * Math.floor(options.length));
    let isRandom = this.state.options[random];
    console.log(`How about some ${isRandom}!`);
    return isRandom;
  }

  handleAddOption(option) {
    console.log(option);
  }


  render() {

    return (
      <div>
        <Header />
        <Action
          hasOptions={this.state.options.length > 0}
          handleRandomDo={this.handleRandomDo}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />


      </div>

    );
  }
}

export default App;
