import {ToDoInteractDto} from "./ToDoInteractDto.tsx";

type Props = {
    toDoList: ToDoInteractDto[]
}

export function ToDoListDisplay(props: Props) {
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
        </div>
    )
}