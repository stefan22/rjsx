import React, {Component} from 'react';
import '../scss/options.scss';

class AddOption extends Component {
  handleNewTodoOption(e) {
    e.preventDefault();
    console.log(e);
    let option = e.target.elements.todo.value.trim();
    if(option.length > 0) {
      e.target.elements.todo.value = '';
      // console.log(option);
    } else {
      console.log('please enter a string value');
    }
  }

  render() {

    return (
      <div>
        {/* {this.props.option}  key: {this.props.option.props.optkey} */}

        <form onSubmit={this.handleNewTodoOption}>
          <label htmlFor="todo">Add a todo:</label>
          <input type="text" name="todo" id="todo" placeholder="enter todo" />
          <button type="submit">Add Item</button>
        </form>

      </div>
    );
  }

} //Header



export default AddOption;
