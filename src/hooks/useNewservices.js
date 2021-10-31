import { useEffect, useState } from "react";

const useNewservices = () => {
    const [newservices, setNewservices] = useState([]);
    useEffect(() => {
        fetch('https://serene-stream-43167.herokuapp.com/newservices')
            .then(res => res.json())
            .then(data => setNewservices(data))
    }, []);
    return {
        newservices
    }
}

export default useNewservices;
