import React, {Component} from 'react';
import Action from './action';
import Header from './header';
import Options from './options';
//import Option from './option';
import '../scss/app.scss';
import AddOption from './add-option';

class App extends Component {
  render() {

    const options = ['milk','oranges','grapes'];

    return (
      <div>

        <Header />
        <Action />

        <Options options={options} />

        <AddOption />


      </div>

    );
  }
}

export default App;
