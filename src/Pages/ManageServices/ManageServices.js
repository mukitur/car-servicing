import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    } ,[])

    const handleDeleteUser = id =>{
        const proced = window.confirm('The service will be deleted. Are you sure?');
        if(proced){
            const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'  
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                alert('Deleted Successfully');
                const remainingServices = services.filter(service=>service._id !== id);
                setServices(remainingServices)
            }
        })
        }
    }

    return (
        <div>
            <h2 className="mt-5">Manage Services(Delete or Update)</h2>
            {
                services.map(service=><p
                key={service._id}
                >
                   Service Name: {service.Name} <br/>
                   Description: {service.Description} <br/>
                   <button onClick={()=> handleDeleteUser(service._id)}>Delete</button>
                </p>)
            }

        </div>
    );
};

export default ManageServices;