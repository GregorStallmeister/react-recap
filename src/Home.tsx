import {useEffect} from "react";

export function Home() {

    useEffect(() => {
        console.log("Mounting Home")
    }, [])

    return (
        <div>
            This is the Home page!
        </div>
    )
}