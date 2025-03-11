import {useState} from "react";
import {ToDoInteractDto} from "./ToDoInteractDto.tsx";
import {Link} from "react-router";

type Props = {
    toDos: ToDoInteractDto[]
}

export function Footer(props: Props) {


    return (
        <div className="footer">
            <Link to="/home" >Home</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/todolist">ToDo List</Link>
        </div>
    )
}