import { useEffect, useState } from "react"


function Prog5(){

    const [curAge, setAge] = useState(18)
    const [curSib, setSib] = useState(3);

    useEffect(() => {
        alert(`something changed ${curAge}`)
    },[curAge])

    return(
        <div className="container">
            <h3>My current age is {curAge}</h3>
            <h4>My siblings {curSib}</h4>

            <button onClick={()=>setAge(curAge=>curAge+1)}>Age</button>
            <button onClick={()=>setSib(curSib=>curSib+1)}>sib</button>
        </div>
    )
}

export default Prog5