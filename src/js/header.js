import React, {Component} from 'react';
import '../scss/App.scss';

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


export default Header;
