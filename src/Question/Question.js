import React from 'react';

const Question = () => {
    return (
        <div className='mt-48'>
            {/* Quastion-1 */}
            <div className="collapse">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-4xl text-center">
                    How Dose React Work.....?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p className='text-center'>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other</p>
  </div>
            </div>
        </div>
    );
};

export default Question;