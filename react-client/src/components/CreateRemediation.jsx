import React from 'react';
import $ from 'jquery';

class CreateRemediation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked:false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clicked = this.clicked.bind(this);
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
      url: "/remediations/create",
      data: this.state,
      success: () => {
        alert('Success!')
        location.reload();
      }
    })
  }
  
  clicked() {
    this.setState({clicked:!this.state.clicked})
  }

  render() {
    if (this.state.clicked) {
      return (
        <div>
          <h1 onClick={this.clicked}>Create a Remediation</h1>
          <form onSubmit={this.handleSubmit} action ="/" method="POST">
            <label name="title" >
              What do you need to work on? 
              <br />
              <input type="text" name="name" id="name" value={this.state.value} onChange={this.handleChange} placeholder="Enter remediation name" size="40" required/>
            </label>
              <br />
            <label name="description" >
              Description:
              <br />
              <textarea name="description" style={{'width':'250px','height':'150px',}} value={this.state.value} onChange={this.handleChange} placeholder="Enter what this remediation is for (optional)"></textarea>
            </label>
              <br />
            <label htmlFor="importance">Rate the importance of this remediation:</label>
              <br />
              <select id="importance" name="importance" value={this.state.value} onChange={this.handleChange} required>
                  <option value="">--Please choose an option--</option>
                  <option value="0">0 - Not Important At All</option>
                  <option value="1">1 - Minimally Important</option>
                  <option value="2">2 - Nice to Have</option>
                  <option value="3">3 - Somewhat Important</option>
                  <option value="4">4 - Very Important</option>
                  <option value="5">5 - The Most Important</option>
              </select>
              <br />
  
              <input type="submit" value="Submit" />
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h1 onClick={this.clicked}>Create a Remediation</h1>
        </div>
      )
    }
    
  }
}

export default CreateRemediation;