import { useState } from "react"


function Prog3(){


    const [state, setState] = useState({age:18, siblings:3})

    const handleChange = (value) => {
        setState({...state,[value]:state[value]+1})
    }

    const {age, siblings} = state

    return(
        <div className="container">
            <h3>My current age is {age}</h3>
            <h4>My siblings {siblings}</h4>

            <button onClick={() => {handleChange("age")}}>Age</button>
            <button onClick={() => {handleChange("siblings")}}>Siblings</button>
        </div>
    )
}

export default Prog3