import React from 'react';
import useData from '../../../hooks/useData';
import Order from '../Order/Order';

const SingleOrder = ({ Id }) => {
    const { datas } = useData();
    const servicesresult = datas?.services?.filter(data => data.id == Id);
    const offersresult = datas?.offers?.filter(data => data.id == Id);
    return (
        <div>
            <div>
                {servicesresult?.map(data => <Order
                    key={data.id}
                    data={data}
                ></Order>)}
            </div>
            <div>
                {offersresult?.map(data => <Order
                    key={data.id}
                    data={data}
                ></Order>)}
            </div>
        </div>
    );
};

export default SingleOrder;