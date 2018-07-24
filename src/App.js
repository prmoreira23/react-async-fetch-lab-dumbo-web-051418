import React, {Component} from 'react';
import Greeting from './components/Greeting'
import ExampleComponent from './components/ExampleComponent'
import Button from './components/Button'
// create your App component here
class App extends Component {

  componentDidMount(){
      fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
  }

  render(){
    return (
      <React.Fragment>
        <Greeting />
        <ExampleComponent />
        <Button />
      </React.Fragment>
    );
  }
}

export default App;
