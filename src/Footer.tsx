import {useState} from "react";
import {ToDoInteractDto} from "./ToDoInteractDto.tsx";

type Props = {
    toDos: ToDoInteractDto[]
}

export function Footer(props: Props) {


    return (
        <div className="footer">
Footer!
        </div>
    )
}