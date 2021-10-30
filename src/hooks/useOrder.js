import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useOrder = () => {
    const { user } = useAuth();
    const [myorders, setMyorders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myorder?search=${user.email}`)
            .then(res => res.json())
            .then(data => setMyorders(data))
    }, [])
    return {
        myorders
    }
}

export default useOrder;