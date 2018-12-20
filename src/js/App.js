import React, {Component} from 'react';
import '../scss/app.scss';

class App extends Component {
  constructor(props,options,random) {
    super(props);
    this.options = options;
    this.random = random;
    this.state = {
      options: props.options,
      random: random || '<< random Todo options available >>'
    };
    this.handleRandomTodo = this.handleRandomTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleTodoList = this.handleTodoList.bind(this);
    this.handleDeleteDefaults = this.handleDeleteDefaults.bind(this);
    this.resetH3 = this.resetH3.bind(this);
  }

  componentDidMount() {
    localStorage.setItem('options',this.state.options);
  }

  componentWillUpdate(nextProps, nextState) {
    let store = localStorage.getItem('options');
    let arrStore =  store.split(',');
    if(nextState.options.length !== arrStore.length) {
      localStorage.setItem('options', nextState.options);
      //console.log(localStorage.getItem('options'));
    }

  }


  handleTodoList() {
    let store = localStorage.getItem('options');
    return store;
  }

  handleDeleteDefaults() {
    let defval = ['oranges','bananas','apples'];
    let options = this.state.options;
    const ckopt = (opt) => {
      for(var i=0; i<options.length; i++) {
        if(typeof options[i] == 'string' &&
        options[i].toLowerCase().endsWith(opt)) {
          options.splice(options[i],1);
        }
      }
      this.setState(() => {
        return {
          options: options
        };
      });
    };
    defval.forEach((val) => {
      ckopt(val);
    });
  }


  handleRandomTodo() {
    let oplen = this.state.options.length;
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

  removeTodo(rem) {
    this.state.options.splice(rem,1); // => arr[1]
    this.setState(() => {
      return {
        options: this.state.options
      };
    });
  }

  resetH3() {
    let list = document.getElementById('todolist');
    list.innerHTML = '<h3>Add a Todo To Do</h3>';

  }

  render() {
    let subtitle='Add a Todo To Do';
    return (
      <div className="calwrapper cfx">
        <div className='app-comp'>
          <h1>App component</h1>
          <p className='blk'></p>

          <Header
            resetH3={this.resetH3}
            handleTodoList={this.handleTodoList}
            handleDeleteDefaults={this.handleDeleteDefaults}
            handleRandomTodo={this.handleRandomTodo}
          />

          <Action
            handleRandomTodo={this.handleRandomTodo}
            resetH3={this.resetH3}
            random={this.state.random}
            options={this.state.options}
          />

          <Options
            resetH3={this.resetH3}
            removeTodo={this.removeTodo}
            options={this.state.options} />

          <AddOption
            resetH3={this.resetH3}
            handleAddTodo={this.handleAddTodo} subtitle={subtitle} />

        </div>
      </div>
    );
  }

} //App

App.defaultProps = {
  options: ['oranges','bananas','apples']
};


class Header extends Component {
  constructor(props) {
    super(props);
    this.handleTodoList = this.handleTodoList.bind(this);
    this.handleDeleteDefaults = this.handleDeleteDefaults.bind(this);
  }

  handleTodoList() {
    let store = this.props.handleTodoList();
    let list = document.getElementById('todolist');
    list.innerHTML = `<h3> ${store} </h3>`;
  }

  handleDeleteDefaults() {
    this.props.handleDeleteDefaults();
    this.props.resetH3();

  }

  render() {
    return (
      <div className='header-comp'>
        <h2>Todo App</h2>
        <div id='todolist'>
          <h3>Add a Todo To Do</h3>
        </div>
        <div className='def-values'>
          <button onClick={this.handleDeleteDefaults}>
            Delete Default Values
          </button>
          <span className='center'>Deletes the 3 original default values</span>
        </div>
        <div className='load-list'>
          <button onClick={this.handleTodoList}>Load Your Todo list</button>
          <span className='center'>Loads your list from Local storage</span>
        </div>
      </div>
    );
  }
};




class Action extends Component {
  constructor(props) {
    super(props);
    this.handleRandomTodo = this.handleRandomTodo.bind(this);
  }

  handleRandomTodo() {
    this.props.handleRandomTodo();
    this.props.resetH3();
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
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(itm) {
    this.props.removeTodo(itm);
    this.props.resetH3();
  }

  render() {
    return (
      <div className='options-comp ovflw'>
        <h3>Options</h3>
        <div className='options cfx'>
          {
            this.props.options.map((itm,index) => {
              return <Option
                removeTodo={this.removeTodo}
                key={index} itmkey={index} itm={itm} />;
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

  removeTodo() {
    return this.props.removeTodo(this.props.itmkey);

  }

  render() {
    return (
      <div className='option-comp cfx'>
        <div className='todo' key={this.props.itmkey}>
          {this.props.itmkey}. {this.props.itm}
          <button
            className='todo-delete-button'
            onClick={this.removeTodo}>Delete Todo
          </button>
        </div>


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
    this.props.resetH3();
  }
  render() {

    return (
      <div className='addoption-comp'>
        <h3>Add Todo</h3>
        <h3>Add your To Do Below</h3>
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
