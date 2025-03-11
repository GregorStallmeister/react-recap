import {ToDoInteractDto} from "./ToDoInteractDto.tsx";
import {useEffect, useState} from "react";

type Props = {
    toDoList: ToDoInteractDto[]
    setToDos: (toDos: ToDoInteractDto[]) => void
    loadToDos: () => void
    filterStatus: string
    setFilterStatus: (filterStatus: string) => void
}

export function ToDoListDisplay(props: Props) {
    const [input, setInput] = useState<string>("")

    useEffect(() => {
        console.log("Mounting ToDoListDisplay")
        setInput(props.filterStatus)
    }, [])

    if (props.toDoList === undefined) {
        return (
            <div>No ToDo list received!</div>
        )
    }

    return (
        <div>
            <ul>
                {props.toDoList.map(toDo => (
                    <li key={toDo.id}>{toDo.id}, {toDo.description}, {toDo.status}</li>
                ))
                }
            </ul>
            <input placeholder="status" value={input} onChange={event => {
                setInput(event.target.value)
            }
            }/>
            &nbsp;
            <button onClick={() => {
                console.log("Button Filter clicked")
                const toDosFiltered: ToDoInteractDto[] = props.toDoList.filter((toDo: ToDoInteractDto) => {
                        return toDo.status.indexOf(input) >= 0
                    }
                )
                if (toDosFiltered.length > 0) {
                    props.setToDos(toDosFiltered)
                    props.setFilterStatus(input)
                }
                else {
                    setInput("Status not known!")
                }
            }}>Filter
            </button>
            &nbsp;
            <button onClick={() => {
                console.log("Button Reset clicked!")
                setInput("")
                props.setFilterStatus("")
                props.loadToDos()
            }}>Reset
            </button>
        </div>
    )
}