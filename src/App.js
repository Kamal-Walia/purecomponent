import React from "react";
import ControlledComponent from "./Components/ControlledComponent";
import FunctionalUncontrolledComponent from "./Components/FunctionalUnControlledComponent";
import NormalComponent from "./Components/NormalComponent";
import PureComponent from "./Components/PureComponent";
import UncontrolledComponent from "./Components/UncontrolledComponent";

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      count:0,
      users: []
    }
  }
  render(){
    console.log('Im in app.js')
    return(
      <div>
          {/* <NormalComponent count={this.state.count} users={this.state.users}/>
          <PureComponent count={this.state.count} users={this.state.users}/>
          <button onClick={() => this.setState({count: 0, users: [1]})}>Click Me</button> */}
            <ControlledComponent />
            <UncontrolledComponent />
            <FunctionalUncontrolledComponent />

      </div>
      
    )
  }
}

export default App;