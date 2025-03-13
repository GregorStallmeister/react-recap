import {useEffect, useState} from 'react'
import './App.css'
import Header from "./Header.tsx";
import {ToDoInteractDto} from "./ToDoInteractDto.tsx";
import axios from "axios";
import {ToDoListDisplay} from "./ToDoListDisplay.tsx";
import {Footer} from "./Footer.tsx";
import {Route, Routes} from "react-router";
import {Home} from "./Home.tsx";
import {ToDoDetails} from "./ToDoDetails.tsx";

function App() {
    const [toDoInteractDtos, setToDoInteractDtos] = useState<ToDoInteractDto[]>([])
    const [filterStatus, setFilterStatus] = useState<string>("")
    const [toDoDetailsID, setToDoDetailsID] = useState<string>("")

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

    function addToDo(description: string) {
        axios.post("/api/todo",
            {
                description: description,
                status: "OPEN"
            })
            .then((response) => {
                console.log(response)
                loadToDoDtos()
            })
            .catch((errorResponse) => {
                console.log(errorResponse)
            })
    }

    return (
        <div className="app">
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/todolist" element={
                    <ToDoListDisplay toDoList={toDoInteractDtos}
                                     setToDos={setToDoInteractDtos}
                                     loadToDos={loadToDoDtos}
                                     filterStatus={filterStatus}
                                     setFilterStatus={setFilterStatus}
                                     setToDoDetailsID={setToDoDetailsID}/>
                }/>
                <Route path="/tododetails" element={<ToDoDetails/>}/>
            </Routes>

            <Footer addToDo={addToDo}/>
        </div>
    )
}

export default App
