import React from 'react';
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            scr: arrayDestruct
        },
        {
            id: 2,
            scr: reactParallax
        },
        {
            id: 3,
            scr: navbar
        },
        {
            id: 4,
            scr: reactSmooth
        },
        {
            id: 5,
            scr: installNode
        },
        {
            id: 6,
            scr: reactWeather
        },
    ]
    return (
        <div name='portfolio' className='bg-gradient-to-b from-morado-1700 to-morado-1500 w-full text-white md-h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold'>Portfolio</p>
                    <p className='py-6'>Checkout out of my work right here.</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id, scr}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={scr} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duraton-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duraton-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
// Quedamos min 1:23:10
export default Portfolio;