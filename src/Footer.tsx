import {useState} from "react";
import {ToDoInteractDto} from "./ToDoInteractDto.tsx";

type Props = {
    toDos: ToDoInteractDto[]
    setToDos: (toDos: ToDoInteractDto[]) => void
}

export function Footer(props: Props) {
    const [input, setInput] = useState<string>("")

    return (
        <div>
            <input placeholder="status" value={input} onChange={event => {
                setInput(event.target.value)
            }
            }/>
            &nbsp;
            <button>Filter</button>
        </div>
    )
}