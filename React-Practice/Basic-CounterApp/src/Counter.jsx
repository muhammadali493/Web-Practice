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
                Add
            </button>

            <button onClick={ () => setCount(count - 1)}>
                Subtract
            </button>
        </div>
    )
}