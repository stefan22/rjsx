import React, {Component} from 'react';
import Modal from 'react-modal';
import OptionModal from './option-modal';
import LoadTodos from './load-todos';
import TopBar from './top-bar';
import Header from './header';
import Action from './action';
import Options from './options';
import AddOption from './add-option';

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
    this.closeModal = this.closeModal.bind(this);
    this.handleClosingLoadTodos = this.handleClosingLoadTodos.bind(this);
    this.state = {
      options: props.options,
      selectedOption: undefined,
      loadtodos: undefined
    };

  }

  componentWillMount() {
    Modal.setAppElement('body');
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
    this.setState(() => ({
      loadtodos: store
    }));
  }

  handleDeleteDefaults() {
    const def = [ 'apples', 'oranges', 'bananas' ];
    let options = this.state.options;
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
    let ran = Math.floor(Math.random() * this.state.options.length);
    let option = this.state.options[ran];
    this.setState(() => ({
        selectedOption: option
    }));
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

  closeModal() {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }

  handleClosingLoadTodos() {
    this.setState(() => ({
      loadtodos: undefined
    }));
  }

  render() {
    let subtitle = 'Add a Todo To Do';
    return (
      <div className="container">
        <div className="app-comp flex-large">
          <TopBar />
          <Header
            handleTodoList={this.handleTodoList}
            handleDeleteDefaults={this.handleDeleteDefaults}
            handleDeleteAll={this.handleDeleteAll}
            handleRandomTodo={this.handleRandomTodo}
            options={this.state.options}
          />

          <Action
            handleRandomTodo={this.handleRandomTodo}
            options={this.state.options}
          />

          <Options
            removeTodo={this.removeTodo}
            options={this.state.options} />

          <AddOption
            handleAddTodo={this.handleAddTodo}
            subtitle={subtitle} />

          <OptionModal
            selectedOption={this.state.selectedOption}
            closeModal={this.closeModal}
          />

          <LoadTodos
            loadtodos={this.state.loadtodos}
            handleClosingLoadTodos={this.handleClosingLoadTodos}
          />
        </div>
      </div>
    );
  }
} //App


App.defaultProps = {
  options: [ 'apples', 'oranges', 'bananas' ]
};



export default App;
