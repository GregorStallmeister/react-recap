import {ToDoInteractDto} from "./ToDoInteractDto.tsx";

type Props = {
    toDos: ToDoInteractDto[]
    toDoID: string
    setToDos: (toDos: ToDoInteractDto[]) => void
}

export function ToDoDetails() {
    return (
     <div>
         Details and Edit page
     </div>
    )
}