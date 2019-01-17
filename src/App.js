import React, { Component } from 'react';
import TodoItem from './TodoItem'

class App extends Component {
  state = {
    list: [],
    value: ''
  }
  add = () => {

    this.setState({
      ...this.state,
      list : [...this.state.list, this.state.value],
      value: ''
    })
  }
  inputChange = (e) => {
    this.setState({
      ...this.state,
      value: e.target.value
    })
  }
  itemOnClick = (index) => {
    this.state.list.splice(index, 1)
    this.setState({
      ...this.state,
    })
  }
  render() {
    const list = this.state.list

    return (
      <React.Fragment>
        <input value={this.state.value} onChange={this.inputChange}/><button style={{background: 'green', color: 'white'}} onClick={this.add}>Add</button>

        Hello.
        <ul>
          {
            list.map((s, i) => <TodoItem key={i} index={i} itemOnClick={this.itemOnClick}>{s}</TodoItem>)
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
