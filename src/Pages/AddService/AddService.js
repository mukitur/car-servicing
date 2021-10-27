import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://gentle-basin-70264.herokuapp.com/services', data)
        .then(res=>{
            console.log(res);
            if(res.data.insertedId){
                alert('added successfully');
            }
            reset();
        })
    }    

    return (
        <div className="add-services">
            <h2 className="my-5">Please add services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name"/>
                <textarea {...register("Description")} placeholder="description" />
                <input type="number" {...register("Price")} placeholder="Price" />
                <input {...register("Image")} placeholder="Image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;