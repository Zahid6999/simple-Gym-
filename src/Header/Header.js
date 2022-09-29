import React from 'react';
import logo from '../Images/hand_with_a_dumbbell.jpg'
import './Header.css'


const Header = () => {
    return (
        <div className='header mt-32 ml-40'>
            <img className='w-24' src={logo} alt="" />
            <h1 className='text-5xl pl-3'>Gym <span className='text-lime-600 font-bold'>King</span></h1>
        </div>
    );
};

export default Header;