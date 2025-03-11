import {Link} from "react-router";

export function Footer() {


    return (
        <div className="footer">
            <Link to="/home" >Home</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/todolist">ToDo List</Link>
        </div>
    )
}