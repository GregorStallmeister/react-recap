import {useEffect, useState} from 'react'
import './App.css'
import Header from "./Header.tsx";
import {ToDoInteractDto} from "./ToDoInteractDto.tsx";
import axios from "axios";
import {ToDoListDisplay} from "./ToDoListDisplay.tsx";
import {Footer} from "./Footer.tsx";
import {Home} from "./Home.tsx";
import {ToDoDetails} from "./ToDoDetails.tsx";
import {Route, Routes} from 'react-router';

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

    function saveToDo(toDo: ToDoInteractDto) {
        axios.put("/api/todo/" + toDo.id, toDo)
            .then((response) => {
                console.log(response)
                loadToDoDtos()
            })
            .catch((errorResponse) => {
                console.log(errorResponse)
            })
    }

    function deleteToDo(toDoId: string) {
        axios.delete("/api/todo/" + toDoId)
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
                <Route path="/tododetails" element={<ToDoDetails
                    toDos={toDoInteractDtos}
                    toDoID={toDoDetailsID}
                    saveToDo={saveToDo}
                    deleteToDo={deleteToDo}/>}/>
            </Routes>

            <Footer addToDo={addToDo}/>
        </div>
    )
}

export default App
