import React from "react";

class ControlledComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            userName: '',
        }
    }

    handleUserNameUpdate = (e) => {
        this.setState({userName: e.target.value})
    }

    showUserName = () => {
       alert(`Alert from Controlled Component ${this.state.userName}`)
    }

    render(){
        console.log('Controlled Component')
        return (
            <div>
                <p>Controlled Component</p>
                UserName: <input type="text" value={this.state.userName} onChange={this.handleUserNameUpdate} />
                <button onClick={this.showUserName}>Alert</button>
            </div>
        )
    }
}

export default ControlledComponent;