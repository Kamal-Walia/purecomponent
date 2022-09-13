import { useRef } from "react";

const FunctionalUncontrolledComponent = () => {
    const inputRef = useRef();

    const handleOnClick = () => {
        console.log('KW101',inputRef)
        alert(`Alert from UnControlled Component ${inputRef.current.value}`)
        inputRef.current.style.width = '200px'
    }
    return (
        <div>
            <p>Funtional Uncontrolled Component</p>
            UserName: <input type="text" ref={inputRef} />
            <button onClick={handleOnClick}>Alert</button>
        </div>
    )
}

export default FunctionalUncontrolledComponent;