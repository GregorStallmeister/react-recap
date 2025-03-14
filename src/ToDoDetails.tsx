import {ToDoInteractDto} from "./ToDoInteractDto.tsx";
import {useEffect, useState} from "react";

type Props = {
    toDos: ToDoInteractDto[]
    toDoID: string
    saveToDo: (toDo: ToDoInteractDto) => void
    deleteToDo: (toDoID: string) => void
}

export function ToDoDetails(props: Props) {
    const [description, setDescription] = useState<string>("")
    const [status, setStatus] = useState<string>("")

    const toDoToDisplay: ToDoInteractDto | undefined = props.toDos
        .find(toDoActual => {
            return toDoActual.id === props.toDoID
        })

    if (toDoToDisplay === undefined) {
        return <div>Nothing found to display!</div>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setDescription(toDoToDisplay.description)
        setStatus(toDoToDisplay.status)
    }, []);


    return (
        <div>
            <table>
                <tr>
                    <td><label>ID:</label></td>
                    <td><input readOnly={true} value={toDoToDisplay?.id} size={80}/></td>
                </tr>

                <tr>
                    <td><label>Description:</label></td>
                    <td><input value={description} size={80}
                               onChange={(event) => {
                                   setDescription(event.target.value)
                               }}/>
                    </td>
                </tr>
                <tr>
                    <td><label>Status:</label></td>
                    <td><input value={status} size={80}
                               onChange={(event) => {
                                   setStatus(event.target.value)
                               }}/>
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <button onClick={
                            () => {
                                props.saveToDo({id: toDoToDisplay.id, description, status})
                            }
                        }>Save
                        </button>
                        &nbsp;
                        <button onClick={
                            () => {
                                props.deleteToDo(toDoToDisplay?.id)
                            }
                        }>Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}