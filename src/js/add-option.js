import React, {Component} from 'react';
import '../scss/options.scss';

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.handleNewTodoOption = this.handleNewTodoOption.bind(this);
  }

  handleNewTodoOption(e) {
    e.preventDefault();
    let option = e.target.elements.todo.value.trim();
    if(option.length > 0) {
      e.target.elements.todo.value = '';
      console.log(option);
      return option;
    } else {
      console.log('please enter a string value');
    }
  }

  render() {

    return (
      <div className='add-option-sitter'>
        <form id="todo-form"
          onSubmit={this.handleNewTodoOption}>
          <label htmlFor="todo">Add a todo:</label>
          <input className='add-todo' type="text" name="todo"
            placeholder="enter todo"/>
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }

} //AddOption



export default AddOption;
