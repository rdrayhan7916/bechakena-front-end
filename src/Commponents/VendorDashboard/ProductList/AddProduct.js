import { useForm } from 'react-hook-form';
import { Container } from '@mui/system';
import React from 'react';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Container className="vendor-container">
                <h2>Add New Product</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="checkout-form vendor-form">
                    <label className="check-lbl">Product Name *</label><br />
                    <input className='check-inpt' {...register("fullName", { required: true })} /><br />
                    <label className="check-lbl">Price *</label><br />
                    <input className='check-inpt' {...register("phone", { required: true })} /><br />
                    <label className="check-lbl">Cetagory *</label><br />
                    <select className='check-inpt' {...register("District", { required: true })}>
                        <option value="DHAKA">Gaming</option>
                        <option value="BHOLA">Home</option>
                        <option value="KHULNA">Kitchen</option>
                    </select><br />


                    <label className="check-lbl">Description *</label><br />
                    <textarea className='check-inpt textArea' {...register("email", { required: true })} /><br />

                    <label className="check-lbl">Product Image *</label><br />
                    <input type="file" className='check-inpt' {...register("license", { required: true })} /><br />
                    <label className="check-lbl">Image *</label><br />
                    <input type="file" className='check-inpt' {...register("nid", { required: true })} /><br />
                    <input className='vendor-sub-btn' type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default AddProduct;