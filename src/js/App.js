import React, {Component} from 'react';
import Action from './action';
import Header from './header';
import Options from './options';
import Option from './option';
import '../scss/app.scss';

class App extends Component {
  render() {

    const options = ['milk','oranges','grapes'];

    return (
      <div>
        <div className="calwrapper cfx">
          <h1>Todo app</h1>
          <div className="row">
            <Header />
            <Action />

            <Options options={options} />
            <Option />


          </div>
        </div>
      </div>

    );
  }
}

export default App;
