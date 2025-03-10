import {useState} from "react";

export function Footer() {
    const [input, setInput] = useState<string>("")

    return (
        <div>
            <input placeholder="ID" value={input} onChange={event => {
                setInput(event.target.value)
            }
            }/>
            <br/>

        </div>
    )
}