import { useState } from "react"


function Prog4(){

    const [curAge, setAge] = useState(18);
    const [cursib, setSib] = useState(3);

    return(
        <div className="container">
            <h3>My current age is {curAge}</h3>
            <h4>My siblings {cursib}</h4>

            <button onClick={()=> setAge(curAge=>curAge+1)}>Age</button>
            <button onClick={() => setSib(cursib=>cursib+1)}>Sib</button>
        </div>
    )
}

export default Prog4