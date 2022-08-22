import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import logo from '../../../img/logov1.png'

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data)
    return (
        <div>
            <Link to='/'>
                <img src={logo} alt='' className='header-logo' />
            </Link>

            <div>
                <h2>
                    Welcome to Bechakena! Please login.
                </h2>
                <form className='reg-page' onSubmit={handleSubmit(onSubmit)}>

                    <input className='in' placeholder='Enter your email' {...register("email")} /> <br />
                    <input className='in' placeholder='Password'  {...register("Password",)} /><br />

                    <input className='in reg-btn' type="submit" value="Sing In" />
                </form>
                <p>Are You New User? <Link to='/registration'>Please Register</Link></p>
                <h5>OR Sing In With</h5>
                <button className='g-btn'><i class="fa-brands fa-google-plus-g me-2 g-icon"></i>Sing In With Google</button><br /><br />
                <button className='f-btn'><i class="fa-brands fa-facebook-f me-2 f-icon"></i>Sing In With Facebook</button>
            </div>
        </div>
    );
};

export default Login;