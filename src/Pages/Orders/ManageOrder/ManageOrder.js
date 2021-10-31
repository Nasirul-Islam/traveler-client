import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    console.log(orders);
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
    const handleConfirm = (id) => {
        const confirmOrder = orders.find(order => order.purchaseId == id)
        confirmOrder.status = "Approved"
        console.log(confirmOrder);
        fetch(`https://serene-stream-43167.herokuapp.com/confirmorder/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(confirmOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Confirm Successfully")
                }
            })
    }
    return (
        <Container className="py-4">
            <h2>Order Count of all users - {orders.length}</h2>
            <div className="table-responsive-md">
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
                                    onClick={() => handleConfirm(pd?.purchaseId)}
                                    className="py-2 border-0 bg-info me-4" variant="info">
                                    Confirm
                                </Button>
                                <Button
                                    onClick={() => handleDelete(pd?.purchaseId)}
                                    className="py-2 border-0 bg-warning" variant="warning">
                                    Delete
                                </Button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </Container>
    );
};

export default ManageOrder;