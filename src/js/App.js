import React, {Component} from 'react';
import TopBar from './top-bar';
import OptionModal from './option-modal';
import '../scss/App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleRandomTodo = this.handleRandomTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleTodoList = this.handleTodoList.bind(this);
    this.handleDeleteDefaults = this.handleDeleteDefaults.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.resetH3 = this.resetH3.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      options: props.options,
      random: 'Random Todo options available',
      selectedOption: undefined,
    };

  }

  componentDidMount() {
    localStorage.setItem('options', this.props.options);
    this.setState(() => ({
      options: this.props.options
    }));
  }

  componentWillUpdate(nextProps, nextState) {
    let store = localStorage.getItem('options');
    let arrStore = store.split(',');
    if (nextState.options.length !== arrStore.length) {
      localStorage.setItem('options', nextState.options);
    }
  }

  componentWillUnmount() {
    console.log('component wil unmount');
  }

  handleTodoList() {
    let store = localStorage.getItem('options');
    return store;
  }

  handleDeleteDefaults() {
    const def = [ 'apples', 'oranges', 'bananas' ];
    let options = this.props.options;
    def.forEach((d, i) =>
      options.forEach((o, idx) => {
        if (String(o) === String(d)) {
          options.splice(idx, 1);
          this.setState(() => {
            return {
              options: options
            };
          });
        }
      })
    );
  }

  handleDeleteAll() {
    this.setState(() => ({
      options: []
    }));
  }

  handleRandomTodo() {
    this.openModal();
    let oplen = this.state.options.length;
    let ran = Math.floor(Math.random() * oplen);
    this.setState((prevState) => {
      return {
        selectedOption: prevState.options[ran]
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
    this.state.options.splice(rem, 1); // => arr[1]
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

  openModal() {
    this.setState(() => ({
      selectedOption: !!undefined
    }));
  }

  closeModal() {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }

  render() {
    let subtitle = 'Add a Todo To Do';
    return (
      <div className="container small-container calwrapper cfx">
        <div className="app-comp flex-large">
          <TopBar />
          <Header
            resetH3={this.resetH3}
            handleTodoList={this.handleTodoList}
            handleDeleteDefaults={this.handleDeleteDefaults}
            handleDeleteAll={this.handleDeleteAll}
            handleRandomTodo={this.handleRandomTodo}
          />

          <Action
            handleRandomTodo={this.handleRandomTodo}
            resetH3={this.resetH3}
            random={this.state.random}
            options={this.state.options}
          />

          <Options resetH3={this.resetH3} removeTodo={this.removeTodo} options={this.state.options} />

          <AddOption resetH3={this.resetH3} handleAddTodo={this.handleAddTodo} subtitle={subtitle} />

          <OptionModal
            selectedOption={this.state.selectedOption}
            openModal={this.openModal}
            closeModal={this.closeModal}

          />
        </div>
      </div>
    );
  }
} //App

App.defaultProps = {
  options: [ 'apples', 'oranges', 'bananas' ]
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
    list.innerHTML = `<h3> ${store.length > 0 ? store : 'Your list is Empty!'} </h3>`;
  }

  handleDeleteDefaults() {
    this.props.handleDeleteDefaults();
    this.props.resetH3();
  }

  render() {
    return (
      <div className="header-comp flex-large">
        <h2 className="text-center">Todo App</h2>
        <div id="todolist">
          <h3 className="text-center">Add a Todo To Do Below</h3>
        </div>
        <div className="content-section">
          <div className="block margin-top text-center">
            <button className="full-button accent-button" onClick={this.handleTodoList}>
							Load Your Todo list
            </button>
            <h4 className="block margin-top">Loads your list from Local storage</h4>
          </div>
        </div>
        <div className="content-section">
          <div className="block margin-top text-center">
            <button
              className="full-button"
              onClick={this.handleDeleteDefaults}>
							Delete Default Values
            </button>
            <h4 className="block margin-top">Deletes the 3 original default values</h4>
          </div>
        </div>
        <div className="content-section">
          <div className="block margin-top text-center">
            <button
              className="full-button accent-button"
              onClick={this.props.handleDeleteAll}>
							Delete All Options
            </button>
            <h4 className="block margin-top">New Todo list - Remove all existing options.</h4>
          </div>
        </div>
      </div>
    );
  }
}

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
    let randomText = 'Your Todo list is empty, enter a few things first.';
    return (
      <div className="action-comp flex-large">
        <div className="content-section">
          <div className="random text-center">
            {this.props.options.length > 0 ? <h4>{this.props.random}</h4> : <h4>{randomText}</h4>}
          </div>

          <button onClick={this.handleRandomTodo} className="button full-button action-button">
						Are you ready for a random Todo?
          </button>
        </div>
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
      <div className="options-comp flex-large">
        <h3>Options</h3>
        <div className="content-section">
          <div className="options">
            {this.props.options.map((itm, index) => {
              return <Option removeTodo={this.removeTodo} key={index} itmkey={index} itm={itm} />;
            })}
          </div>
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
      <div className="option-comp clearfix flex-large">
        <div className="todo" key={this.props.itmkey}>
          {this.props.itmkey}. {this.props.itm}
          <button className="button .square-button red-button" onClick={this.removeTodo}>
						Delete Todo
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
    if (adop !== '') {
      this.props.handleAddTodo(adop);
      document.forms[0].querySelector('.add-todo').value = '';
    }
    this.props.resetH3();
  }
  render() {
    return (
      <div className="addoption-comp flex-large">
        <h3>Add Todo</h3>
        <h3>Add your To Do Below</h3>
        <div className="content-section">
          <form onSubmitCapture={this.handleAddOption}>
            <input type="text" className="add-todo" placeholder="enter a Todo to do" />
            <button type="submit" className="full-button">
							Add a Todo
            </button>
          </form>
        </div>
      </div>
    );
  }
} //AddOption

export default App;
