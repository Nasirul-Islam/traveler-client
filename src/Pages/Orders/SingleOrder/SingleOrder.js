import React from 'react';
import useData from '../../../hooks/useData';
import useNewservices from '../../../hooks/useNewservices';
import Order from '../Order/Order';

const SingleOrder = ({ purchaseId, status }) => {
    // console.log(status)
    const { datas } = useData();
    const { newservices } = useNewservices();
    const servicesresult = datas?.services?.filter(data => data.id == purchaseId);
    const offersresult = datas?.offers?.filter(data => data.id == purchaseId);
    const newservicesresult = newservices?.filter(data => data.id == purchaseId);
    return (
        <div>
            <div>
                {servicesresult?.map(data => <Order
                    key={data.id}
                    data={data}
                    status={status}
                ></Order>)}
            </div>
            <div>
                {offersresult?.map(data => <Order
                    key={data.id}
                    data={data}
                    status={status}
                ></Order>)}
            </div>
            <div>
                {newservicesresult?.map(data => <Order
                    key={data.id}
                    data={data}
                    status={status}
                ></Order>)}
            </div>
        </div>
    );
};

export default SingleOrder;