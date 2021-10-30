import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [myorders, setMyorders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myorder')
            .then(res => res.json())
            .then(data => setMyorders(data))
    }, []);
    console.log(myorders);
    return (
        <div>
            <h2>Here is MyOrder {myorders.length}</h2>
        </div>
    );
};

export default MyOrder;