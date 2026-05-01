import React from 'react';
import swimmingImg from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playImg from "../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='bg-base-200  p-3'>
            <h2 className='font-bold mb-5'>Qzone</h2>
            <div className='space-y-5'>
                <img className='hover:scale-100 transition-all hover:-rotate-3' src={swimmingImg}></img>
                <img  className='hover:scale-100 transition-all hover:-rotate-3'src={classImg}></img>
                <img className='hover:scale-100 transition-all hover:-rotate-3' src={playImg}></img>
            </div>
        </div>
    );
};

export default Qzone;