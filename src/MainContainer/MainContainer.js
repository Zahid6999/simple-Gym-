import React, { useEffect, useState } from 'react';
import Product from '../Porduct/Product';
import './MainContainer.css'

const MainContainer = () => {
  const [gymPorducts, setGymProducts] = useState([]);
  const [time, setTime] = useState([])

  useEffect(() =>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setGymProducts(data))
  },[])

 
  const AddToCartHandler = (gymItem) => {
    console.log(gymItem);
    const newCart = [...time, gymItem];
    setTime(newCart);


  }
    return (
        <div>
       <h1 className='text-2xl ml-16 mb-7 lg:text-3xl lg:text-stone-900 lg:ml-44 mt-14'>Select today's Exercise </h1>

        <div className='main-container'>

            {/*----------- Gym content----------- */}
           <div className="gym-content grid grid-flow-col-1 gap-9 lg:grid lg:grid-cols-3  gap-10 lg:ml-40 lg:mt-11">
              
              {
                gymPorducts.map((gymItem) => <Product
                 gymItem={gymItem}
                  key={gymItem.id}
                  AddToCartHandler={AddToCartHandler}
                  ></Product>)
              }
           </div>

            {/*-------- Cart content ---------*/}
           <div className="cart-content bg-gray-200 text-center pt-9">
            <h1 className='text-2xl lg:text-3xl font-bold'>Zahid Hasan</h1>
            <p><small className=' text-lg lg:text-lg'>Ghatail, Tangail</small></p>
            


            <div className=' bg-white shadow-2xl m-5 rounded-xl h-20 grid grid-cols-3 gap-4 items-center'>
              <div>
              <h2 className='text-2xl font-semibold'>60 <small className='text-base  font-light '>kg</small></h2>
              <p className='font-semiboldbold'>Weigth</p>
              </div>
              <div>
              <h2 className='text-2xl font-semibold'>5.7</h2>
              <p className='font-semiboldbold'>Height</p>
              </div>
              <div>
              <h2 className='text-2xl font-semibold'>21 <small className='text-base  font-light '>Yrs</small></h2>
              <p className='font-semiboldbold'>Age</p>
              </div>
            </div>


            <h1 className='py-9 text-xl lg:text-2xl font-semibold'>Add A Break</h1>
            <div className=' bg-white shadow-2xl m-5 p-3 rounded-xl h-20 grid grid-cols-5 gap-4 items-center'>
                <h4 className='rounded-full bg-slate-200 h-14 pt-4 text-lg font-medium'>10S</h4>
                <h4 className='rounded-full bg-slate-200 h-14 pt-4 text-lg font-medium'>20S</h4>
                <h4 className='rounded-full bg-green-500 h-14 pt-4 text-lg font-medium'>30S</h4>
                <h4 className='rounded-full bg-slate-200 h-14 pt-4 text-lg font-medium'>40S</h4>
                <h4 className='rounded-full bg-slate-200 h-14 pt-4 text-lg font-medium'>50S</h4>
            </div>


            <h1 className='py-9 text-xl  lg:text-2xl font-semibold'>Exerise Details</h1>

            <div className=' bg-white shadow-2xl m-5 rounded-xl h-20 grid grid-cols-2 gap-4 items-center'>
                <h3 className='text-2xl font-medium pl-2'>Exercise time</h3>
                <p className='font-light text-lg'>{time.length} seconds</p>
            </div>

            
            

            <div className=' bg-white shadow-2xl m-5 rounded-xl h-20 grid grid-cols-2 gap-4 items-center'>
                <h3 className='text-2xl font-medium pl-2'>Break time</h3>
                <p className='font-light text-lg'>10 seconds</p>
            </div>

            <button className="btn btn-active btn-accent w-full py-5 mt-6">Button</button>
           </div>

 
        

        </div>
        </div>
    );
};

export default MainContainer;
