import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import CreateRemediation from './components/CreateRemediation.jsx'
import DoRemediation from './components/DoRemediation.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      showRemediationList: false,
      showRandomRemediations: false
    }
    this.toggleRemediations = this.toggleRemediations.bind(this);
    this.toggleRandomRemediations = this.toggleRandomRemediations.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  toggleRemediations() {
    this.setState({showRemediationList: !this.state.showRemediationList})
  }
  toggleRandomRemediations() {
    this.setState({showRandomRemediations: !this.state.showRandomRemediations})
  }

  render () {
    return (<div>
      <h1 onClick={this.toggleRemediations}>View Remediations</h1>
      {this.state.showRemediationList ? <List items={this.state.items}/> : null}
      <CreateRemediation />
      <h1 onClick={this.toggleRandomRemediations}>Random Remediation</h1>
      {this.state.showRandomRemediations ? <DoRemediation items={this.state.items}/> : null}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));