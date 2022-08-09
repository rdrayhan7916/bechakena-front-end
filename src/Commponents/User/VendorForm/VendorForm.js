import { Container } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import './VendorForm.css'
const VendorForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Container className="vendor-container">
                <h2>Create Your Vendor Account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="checkout-form vendor-form">
                    <label className="check-lbl">Full Name *</label><br />
                    <input className='check-inpt' {...register("fullName", { required: true })} /><br />
                    <label className="check-lbl">Phone *</label><br />
                    <input className='check-inpt' {...register("phone", { required: true })} /><br />
                    <label className="check-lbl">Email *</label><br />
                    <input className='check-inpt' {...register("email", { required: true })} /><br />


                    <label className="check-lbl">District *</label><br />
                    <select className='check-inpt' {...register("District", { required: true })}>
                        <option value="DHAKA">DHAKA</option>
                        <option value="BHOLA">BHOLA</option>
                        <option value="KHULNA">KHULNA</option>
                    </select><br />
                    <label className="check-lbl">Address *</label><br />
                    <input className='check-inpt' {...register("address", { required: true })} /><br />
                    <label className="check-lbl">E-Trade License *</label><br />
                    <input type="file" className='check-inpt' {...register("license", { required: true })} /><br />
                    <label className="check-lbl">NID *</label><br />
                    <input type="file" className='check-inpt' {...register("nid", { required: true })} /><br />
                    <input className='vendor-sub-btn' type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default VendorForm;