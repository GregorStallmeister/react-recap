import {useEffect, useState} from 'react'
import './App.css'
import Header from "./Header.tsx";
import {ToDoInteractDto} from "./ToDoInteractDto.tsx";
import axios from "axios";
import {ToDoListDisplay} from "./ToDoListDisplay.tsx";
import {Footer} from "./Footer.tsx";
import {Route, Routes} from "react-router";
import {Home} from "./Home.tsx";

function App() {
    const [toDoInteractDtos, setToDoInteractDtos] = useState<ToDoInteractDto[]>([])
    const [filterStatus, setFilterStatus] = useState<string>("")

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

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/todolist" element={
                    <ToDoListDisplay toDoList={toDoInteractDtos}
                                     setToDos={setToDoInteractDtos}
                                     loadToDos={loadToDoDtos}
                                     filterStatus={filterStatus}
                                     setFilterStatus={setFilterStatus}/>
                }/>
            </Routes>
            <Footer
                toDos={toDoInteractDtos}
            />
        </div>
    )
}

export default App
