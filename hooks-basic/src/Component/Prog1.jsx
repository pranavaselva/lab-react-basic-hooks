import { useState } from "react"


function Prog1(){

    const [curAge, setAge] = useState(18)

    const handleChange = () => {
        setAge(curAge + 1)
    }

    return(
        <div className="container">
            <h3>Current Age is {curAge}</h3>
            <button onClick={handleChange}>Get Older</button>
        </div>
    )
}

export default Prog1