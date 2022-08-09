import React from 'react';
import './AccountInfo.css'
const AccountInfo = () => {
    return (
        <div>
            <img className='user-pic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU ' alt='' />
            <i className="fa-solid fa-pen-to-square user-edit-icon"></i>
            <hr />
            <input className='info' type="text" value="MD. RAYHAN" />
            <input className='info' type="phone" value="01711111111" disabled />
            <input className='info' type="email" value="rdrayhan7916@gmail.com" />
            <input className='info pro-btn' type="submit" value="UPDATE PROFILE" />

        </div>
    );
};

export default AccountInfo;