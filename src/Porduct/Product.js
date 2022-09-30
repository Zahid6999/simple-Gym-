import React from 'react';

const Product = (props) => {
    // console.log(props);
    const {name, age, time, info, img} = props.gymItem ;
    
    return (
        <div>

            {/* Cart perent div */}
            <div>
              <div className="card w-96 lg:w-auto bg-base-100 shadow-2xl">
                <figure className="px-4 pt-4 ">
                  <img src={img} alt="gym" className="rounded-xl h-56" />
                </figure>
              <div className="card-body ">
                <h2 className=" text-2xl lg:text-3xl ml-0 lg:font-bold">{name}</h2>
                <p className='text-base lg:text-xl'>{info}</p>
                <h5 className='lg:text-xl font-bold lg:font-bold'>For Age: {age}</h5>
                <h5 className='text-lg lg:text-xl font-bold lg:font-bold'>Time required: {time}</h5>
              <div className="card-actions">
                <button onClick={ () => props.AddToCartHandler(props.gymItem)} className="btn btn-success w-full lg:text-2xl lg:py-3">Add To list</button>
              </div>
               </div>
        </div>
        </div>
    </div>
    );
};

export default Product;