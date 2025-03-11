import {Link} from "react-router";
import {useState} from "react";

type Props = {
    addToDo(description: string): void
}

export function Footer(props: Props) {
const [input, setInput] = useState<string>("")

    return (
        <div className="footer">
            <hr />
            <Link to="/home" >Home</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/todolist">ToDos-List</Link>
            &nbsp;&nbsp;&nbsp;
            Add a new one:&nbsp;
            <input size="80" placeholder="description" value={input}
                   onChange={(event) => {
                       setInput(event.target.value)
                   }}/>
            &nbsp;
            <button onClick={() => {
                console.log("Button Add clicked")
                props.addToDo(input)
            }}>Add</button>
        </div>
    )
}