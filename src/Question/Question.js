import React from 'react';

const Question = () => {
    return (
        <div className='mt-48'>
            {/* Quastion-1 */}
            <div className="collapse  w-8/12 mx-auto rounded-xl">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-3xl lg:text-4xl text-center">
                    How Dose React Work.....?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-success peer-checked:text-secondary-content"> 
    <p className='text-center py-3 text-lg lg:text-2xl'>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. <br /> You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other</p>
  </div>
            </div>

            {/* Quastion-2 */}
            <div className="collapse mt-5  w-8/12 mx-auto rounded-xl">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-3xl lg:text-4xl text-center">
                    What is the difference between props and useState.....?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-orange-600 peer-checked:text-secondary-content"> 
    <p className='text-center py-3 text-lg lg:text-2xl'>Data Cannot be Changed through  props, only data is sent through  props...! Properties are called props on the language of React, <br /> One thing that can be changed is when the user clicks, interacts with the page
     </p>
  </div>
            </div>


            {/* Quastion-3 */}
            <div className="collapse mt-5 w-8/12 mx-auto rounded-xl">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-3xl lg:text-4xl text-center">
                    What dose useEffect do  other than load data?....?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-lime-600 peer-checked:text-secondary-content"> 
    <p className='text-center py-3 text-lg lg:text-2xl'>
Side Effect Runs Only Once After Initial Render

You do not want to make this API call again. <br /> You can pass an empty array as the second argument to the useEffect hook to tackle this use case
     </p>
  </div>
            </div>
        </div>
    );
};

export default Question;