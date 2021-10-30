import { useState } from "react";
import { useEffect } from "react";

const useData = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('/fackdata.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    return {
        datas
    }
}

export default useData;