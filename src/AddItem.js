import React from 'react'


class AddItem extends React.Component {
    state = {
    value: '',
  };
  
    handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleAddItem = event => {
    event.preventDefault();
    this.props.handleAddItem(this.state.value);
    this.setState({
      value: ''
    });
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };
  
  render() {
    return(
          <form onSubmit={this.handleAddItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
    );
  }
}

export default AddItem;