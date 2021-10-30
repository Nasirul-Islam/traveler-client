import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useOrder = () => {
    const { user } = useAuth();
    const [myorders, setMyorders] = useState([]);
    useEffect(() => {
        fetch(`https://serene-stream-43167.herokuapp.com/myorder?search=${user.email}`)
            .then(res => res.json())
            .then(data => setMyorders(data))
    }, [])
    return {
        myorders
    }
}

export default useOrder;