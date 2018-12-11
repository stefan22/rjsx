import React, {Component} from 'react';
import Action from './action';
import Header from './header';
import Options from './options';
//import Option from './option';
import '../scss/app.scss';

class App extends Component {
  render() {

    const options = ['milk','oranges','grapes'];

    return (
      <div>

        <Header />
        <Action />

        <Options options={options} />




      </div>

    );
  }
}

export default App;
