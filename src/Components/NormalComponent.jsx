import React from "react";

class NormalComponent extends React.Component {

    //     shouldComponentUpdate(nextProps){
    //     if(nextProps.users.length === this.props.users.length){
    //         return false
    //     } else {
    //         return true
    //     }
        
    // }
  render(){
    console.log('Im in NormalComponent')
    return(
      <div>Hello Normal Component {this.props.count}</div>
    )
  }
}

export default NormalComponent;