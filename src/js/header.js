import React, {Component} from 'react';
import '../scss/App.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteDefaults = this.handleDeleteDefaults.bind(this);
  }

  handleDeleteDefaults() {
    this.props.handleDeleteDefaults();
  }

  render() {
    return (
      <div className="header-comp">
        <div id='todolist'>
          <h1 className="text-center">Todo App</h1>
          <h2 className="text-center">Add a Todo To Do Below</h2>
        </div>
        <div className="content-section margin-top">
          <div className="block margin-top text-center">
            <div className="text-center margin-top">
              {this.props.options.length > 0 ? <h4>Todo list Avail</h4> : <h4>No Todo list Avail</h4>}
            </div>
            <button className="full-button accent-button" onClick={this.props.handleTodoList}>
							Load Your Todo list (popup)
            </button>
            <h5 className="block">(Loads your list from Local storage)</h5>
          </div>
        </div>
        <div className="content-section margin-top">
          <div className="block margin-top text-center">
            <div className="text-center margin-top">
              {this.props.options.length > 0 ? <h4>Defaults Avail for deletion</h4> : <h4>No Default Values Avail</h4>}
            </div>
            <button
              className="full-button"
              onClick={this.handleDeleteDefaults}>
							Delete Default Values
            </button>
            <h5 className="block">(Deletes the 3 original default values)</h5>
          </div>
        </div>
        <div className="content-section margin-top">
          <div className="block margin-top text-center">
            <div className="text-center margin-top">
              {this.props.options.length > 0 ? <h4>Options Avail for deletion</h4> : <h4>No Options Avail</h4>}
            </div>
            <button
              className="full-button accent-button"
              onClick={this.props.handleDeleteAll}>
							Delete All Options
            </button>
            <h5 className="block">(New Todo list - Removes all existing options.)</h5>
          </div>
        </div>
      </div>
    );
  }
}


export default Header;
