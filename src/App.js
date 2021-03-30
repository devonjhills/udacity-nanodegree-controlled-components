import React from 'react';
import AddItem from './AddItem'
import DeleteItem from './DeleteItem'
import ItemsList from './ItemsList'
import logo from './logo.svg';
import './App.css';

/*
### Instructions

This file gives you a functioning app. But, as you can tell, the App
isn't modular at all - there is only 1 component!

**Task**: Break down this app into components and make them work together to achieve
exactly the same result.

Remember that React components should be modular, composable (can be assembled in various
ways to achieve the desired result on the page), and reusable.

This exercise will help you to practice passing data into components, creating
Stateless Functional Components, adding state to components, updating state, and
creating Controlled Components.

*/

class App extends React.Component {

  state = {
    items: [],
    };

    handleAddItem = item => {
      this.setState(prevState => ({ items: [...prevState.items, item] }));
    };

    handleDeleteLastItem = (event) => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    }

    noItemsFound = () => {
      return this.state.items.length === 0;
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItem handleAddItem={this.handleAddItem}/>
        <DeleteItem handleDeleteLastItem={this.handleDeleteLastItem} buttonDisabled={this.noItemsFound()}  />
        <ItemsList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
