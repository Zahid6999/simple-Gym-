import React from 'react';
import logo from '../Images/hand_with_a_dumbbell.jpg'
import './Header.css'


const Header = () => {
    return (
        <div className='header mt-10 ml-14 lg:mt-20 lg:ml-40'>
            <img className='w-28 lg:w-36' src={logo} alt="" />
            <h1 className='text-3xl lg:text-6xl pl-3'>Gym <span className='text-lime-600 font-bold'>King</span></h1>
        </div>
    );
};

export default Header;