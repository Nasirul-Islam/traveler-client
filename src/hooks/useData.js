import { useState } from "react";
import { useEffect } from "react";

const useData = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/serveces')
            .then(res => res.json())
            .then(data => {
                data?.map(alldata => setDatas(alldata))
            })
    }, [])
    return {
        datas
    }
}

export default useData;