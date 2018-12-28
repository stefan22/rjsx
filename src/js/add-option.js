import React, {Component} from 'react';
import '../scss/App.scss';

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
  }
  render() {
    return (
      <div className="addoption-comp">
        <div className='content-section margin-top'>
          <h3 className='no-margin-bottom'>Add Todo</h3>
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
      </div>
    );
  }
} //AddOption


export default AddOption;
