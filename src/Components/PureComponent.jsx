import React from "react";

class PureComponent extends React.PureComponent{
    render() {
        console.log('Im in PureComponent')
        return(
            <div>Hello Pure Component {this.props.count}</div>
        )
    }

}

export default PureComponent;