import { useState } from "react"
// function increaseCounter(count){
//     return count + 1
// }
export default function Counter(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <p>Clicked {count} times</p>
            <button onClick={ () => setCount(count + 1)}>
                Click
            </button>
        </div>
    )
}