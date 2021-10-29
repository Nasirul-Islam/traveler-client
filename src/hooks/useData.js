import { useState } from "react";
import { useEffect } from "react";

const useData = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    return {
        datas
    }
}

export default useData;