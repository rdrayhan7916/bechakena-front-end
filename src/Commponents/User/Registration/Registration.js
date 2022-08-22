import React from 'react';
import { Link, } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Registration.css'
import logo from "../../../img/logov1.png"
const Registration = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        if (data.Password !== data.Password2) {
            alert("Password Does Not Match")
        }
        else {
            console.log(data.Password)
        }

    };
    return (
        <div >
            <div>
                <Link to='/'>
                    <img src={logo} alt='' className='header-logo' />
                </Link>
                <h2>
                    Create Account
                </h2>
                <form className='reg-page' onSubmit={handleSubmit(onSubmit)}>
                    <input className='in' placeholder='First and last name' {...register("firstName", { required: true, maxLength: 20 })} /> <br />
                    <input className='in' placeholder='Enter your email' {...register("email")} /> <br />
                    <input className='in' placeholder='Password'  {...register("Password", { required: true, maxLength: 20 })} /><br />
                    <input className='in' placeholder='Password2'  {...register("Password2", { required: true, maxLength: 20 })} /><br />
                    <input className='in reg-btn' type="submit" value="Submit" />
                </form>
                <p>Already have account? <Link to='/singin'> Sing In</Link></p>
            </div>
        </div>
    );
};

export default Registration;