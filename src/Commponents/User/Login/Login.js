import React from 'react';
import { useForm } from "react-hook-form";
import { Link, } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data)
    return (
        <div>
            <div>
                <h2>
                    Sing-In
                </h2>
                <form className='reg-page' onSubmit={handleSubmit(onSubmit)}>

                    <input className='in' placeholder='Enter your email' {...register("email")} /> <br />
                    <input className='in' placeholder='Password'  {...register("Password",)} /><br />

                    <input className='in reg-btn' type="submit" value="Sing In" />
                </form>
                <p>Are You New User? <Link to='/registration'>Please Register</Link></p>
                <h3>OR</h3>
                <button className='g-btn'><i class="fa-brands fa-google-plus-g me-2 g-icon"></i>Sing In With Google</button><br /><br />
                <button className='f-btn'><i class="fa-brands fa-facebook-f me-2 f-icon"></i>Sing In With Facebook</button>
            </div>
        </div>
    );
};

export default Login;