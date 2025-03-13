import {ToDoInteractDto} from "./ToDoInteractDto.tsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

type Props = {
    toDoList: ToDoInteractDto[]
    setToDos: (toDos: ToDoInteractDto[]) => void
    loadToDos: () => void
    filterStatus: string
    setFilterStatus: (filterStatus: string) => void
    setToDoDetailsID: (toDoDetailsID: string) => void
}

export function ToDoListDisplay(props: Props) {
    const [input, setInput] = useState<string>("")
    const navigate = useNavigate()

    useEffect(() => {
        console.log("Mounting ToDoListDisplay")
        setInput(props.filterStatus)
    }, [props.filterStatus])

    if (props.toDoList === undefined) {
        return (
            <div>No ToDo list received!</div>
        )
    }

    function onClick(toDoID: string) {
        props.setToDoDetailsID(toDoID)
        navigate("/tododetails")
    }

    return (
        <div>
            <ul>
                {props.toDoList.map(toDo => (
                    <li key={toDo.id}>{toDo.id}, {toDo.description}, {toDo.status}
                        &nbsp;
                        <button onClick={() => {
                            console.log("Button Details clicked at ToDo " + toDo.id)
                            onClick(toDo.id)
                        }}>Details
                        </button>
                    </li>
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
                } else {
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