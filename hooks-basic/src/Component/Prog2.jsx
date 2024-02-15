import { useState } from "react"

function Prog2(){

    const [curAge, setAge] = useState(18)
    const [sib, setSibAge] = useState(1)

    const changeAge = () => {
        setAge(curAge + 1)
    }

    const changeSib = () => {
        setSibAge(sib + 1)
    }

    return(
        <div className="container">
            <h3>My current Age is {curAge}</h3>
            <h4>My siblings {sib}</h4>

            <button onClick={changeAge}>Get Older</button>
            <button onClick={changeSib}>Get more sib</button>
        </div>
    )
}

export default Prog2