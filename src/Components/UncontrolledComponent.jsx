import React, {createRef} from "react";

class UncontrolledComponent extends React.Component{
    constructor(){
        super()
        this.inputRef = createRef();

    }

    handleOnClick = () => {
        console.log('KW101', this.inputRef)
        // alert(`Alert from UnControlled Component ${this.inputRef.current.value}`)
        this.inputRef.current.style.width = '200px'
    }
    render() {
        console.log('UnControlled Component')
        return(
            <div>
                <p>Uncontrolled Component</p>
                UserName: <input type="text" ref={this.inputRef}/>
               <button onClick={this.handleOnClick}>Alert</button>
            </div>
        )
    }
}

export default UncontrolledComponent;