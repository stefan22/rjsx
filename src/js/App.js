import React, {Component} from 'react';
import '../scss/app.scss';

class App extends Component {
  constructor(props,options,random) {
    super(props);
    this.options = options;
    this.random = random;
    this.state = {
      options: [
        'milk','grapes','bread','tomatoes','berries','honey','toothpast'
      ],
      random: random || '<< random Todo options available >>'
    };
    this.handleRandomTodo = this.handleRandomTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRandomTodo() {
    let oplen = this.state.options.length -1;
    let ran = Math.floor(Math.random() * oplen);
    this.setState((prevState) => {
      return {
        random: prevState.options[ran]
      };
    });
  }

  handleAddTodo(atd) {
    this.setState(() => {
      return {
        options: this.state.options.concat(atd)
      };
    });
  }


  render() {
    return (
      <div className='app-comp'>
        <h1>App component</h1>


        <Header  />

        <Action handleRandomTodo={this.handleRandomTodo}
          random={this.state.random}
          options={this.state.options}
        />

        <Options options={this.state.options} />

        <AddOption handleAddTodo={this.handleAddTodo} />









      </div>
    );
  }

} //App


class Header extends Component {
  render() {
    return (
      <div className='header-comp'>
        <h2>TodoList</h2>
        <h3>Add a Todo To Do</h3>
      </div>
    );
  }
} //Header


class Action extends Component {
  constructor(props) {
    super(props);
    this.handleRandomTodo = this.handleRandomTodo.bind(this);
  }

  handleRandomTodo() {
    this.props.handleRandomTodo();
  }

  render() {
    let randomText='<< Your Todo list is empty, enter a few things first. >>';
    return (
      <div className='action-comp'>
        <div className='randomdo'>
          <div>
            {
              (this.props.options.length > 0) ? this.props.random : randomText
            }
          </div>
        </div>
        <button onClick={this.handleRandomTodo}
          className='action-button'>
          Are you ready for a random Todo?
        </button>
      </div>
    );
  }
} //Action


class Options extends Component {
  render() {
    let options = this.props.options;
    return (
      <div className='options-comp ovflw'>
        <h3>Options</h3>
        <div className='options cfx'>
          {
            options.map((itm,index) => {
              return <Option key={index} itmkey={index} itm={itm} />;
            })
          }
        </div>

      </div>
    );
  }
} //Options


class Option extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(e) {
    console.dir(e.target);
    let ele = e.target.parentElement;
    ele.parentElement.removeChild(ele);

    console.log('remove todo');
  }

  render() {
    console.log(this);
    return (
      <div className='option-comp cfx'>
        <span>{this.props.itmkey}. {this.props.itm}</span>
        <button
          className='todo-delete-button'
          onClick={this.removeTodo}>Delete Todo
        </button>
      </div>
    );
  }
} //Option


class AddOption extends Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();
    let adop = e.target.children[0].value.trim();
    if(adop !== '') {
      this.props.handleAddTodo(adop);
      document.forms[0].querySelector('.add-todo').value = '';
    }
  }
  render() {
    return (
      <div className='addoption-comp'>
        <h3>Add Todo</h3>
        <form onSubmitCapture={this.handleAddOption}>
          <input type='text' className='add-todo'
            placeholder='enter a Todo to do' />
          <button type="submit" className='todo-button'>Add a Todo</button>
        </form>

      </div>
    );
  }
} //AddOption










export default App;
