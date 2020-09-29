import React from 'react';
import { v4 as uuid } from 'uuid';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // Constructor with state
  constructor () {
    super();

    this.state = {
      todoListArray: [],
    }
  }

  //Class methods to update state
  toggleTodo = (clickedTodoId) =>{
    this.setState({
      todoListArray: this.state.todoListArray.map((item) =>{
        if (item.id === clickedTodoId){
          return{
            ...item,
            completed: !item.completed,
          }
        }
        return item; //otherwise just return the item

      })
    })
  }

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: uuid(),
      completed: false,
    }
    this.setState({
      todoListArray: [...this.state.todoListArray, newTask]
    })
  }

  removeTask = () =>{
    this.setState({
      todoListArray: this.state.todoListArray.filter(todoItem => todoItem.completed === false),
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
