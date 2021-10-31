import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    console.log(orders)
    useEffect(() => {
        fetch('https://serene-stream-43167.herokuapp.com/allorder')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [control]);
    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            fetch(`https://serene-stream-43167.herokuapp.com/cancelorder/${id}`, {
                method: "delete",
                headers: { "content-type": "application/json" },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        setControl(!control);
                        alert("Deleted Successfully")
                    }
                })
        }
    }
    return (
        <Container className="py-4">
            <h2>Order Count of all users - {orders.length}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Purchase Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody key={pd._id}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?._id}</td>
                            <Button
                                onClick={() => handleDelete(pd?.purchaseId)}
                                className="p-2 border-0 bg-warning" variant="warning">
                                Delete
                            </Button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </Container>
    );
};

export default ManageOrder;