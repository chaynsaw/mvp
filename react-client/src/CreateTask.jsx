import React from 'react';
import $ from 'jquery';
class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    console.log(this.state)
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/tasks/create",
      data: this.state,
    })
  }

  render() {
    return (
      <div>
        <h2>Create a Task</h2>
        <form onSubmit={this.handleSubmit} action ="/" method="POST">
          <label name="title" >
            What do you need to work on? 
            <br />
            <input type="text" name="name" id="name" value={this.state.value} onChange={this.handleChange} placeholder="Enter task name" size="40" required/>
          </label>
            <br />
          <label name="description" >
            Description:
            <br />
            <textarea name="description" style={{'width':'250px','height':'150px',}} value={this.state.value} onChange={this.handleChange} placeholder="Enter what this task is for (optional)"></textarea>
          </label>
            <br />
          <label for="importance">Rate the importance of this remediation:</label>
            <br />
            <select id="importance" name="importance" value={this.state.value} onChange={this.handleChange} required>
                <option value="">--Please choose an option--</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br />

            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateTask;