import {useEffect, useState} from 'react'
import './App.css'
import Header from "./Header.tsx";
import {ToDoInteractDto} from "./ToDoInteractDto.tsx";
import axios from "axios";
import {ToDoListDisplay} from "./ToDoListDisplay.tsx";
import {Footer} from "./Footer.tsx";

function App() {
    const [toDoInteractDtos, setToDoInteractDtos] = useState<ToDoInteractDto[]>()

    function loadToDoDtos() {
        axios.get("/api/todo")
            .then((response) => {
                console.log(response)
                setToDoInteractDtos(response.data)
            })
    }

    useEffect(() => {
        console.log("Mounting App!")
        loadToDoDtos()
    }, [])

    return (
        <div className="app">
            <Header/>
            <ToDoListDisplay toDoList={toDoInteractDtos}/>
            <Footer />
        </div>
    )
}

export default App
