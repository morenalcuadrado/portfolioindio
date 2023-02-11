import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
return (
    <div name='Home' className='h-screen w-full bg-gradient-to-b from-morado-1700 via-morado-1600 to-morado-1500'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-3xl sm:text-5xl py-5 font-bold text-white'>
                I am becoming a full stack Developer
                </h2>
                <p className='text-white py-2 max-w-md'>
                    I am a civil engineer with over 6 years of experience in construction project management. Starting in 2020, I decided to broaden my horizons and venture into web development and programming. I strongly believe in having a solid foundation, so I have been training myself as a full stack Javascript developer.
                </p>
                <p className='text-white py-2 max-w-md'>
                    I would like to invite you to a conversation about how we can work together on innovative and challenging projects. I am confident that my experience in project management and my passion for technology will allow me to add value to any initiative we work on together.
                </p>
                <p className='text-white py-2 max-w-md'>
                    If you are interested in exploring new collaboration opportunities, please do not hesitate to contact me. I am eager to hear your ideas and work together to achieve great things.
                </p>
                <div>
                    <button className= 'group text-white w-fit px-6 py-3 my-2 border border-white flex items-center rounded-md bg-gradient-to-r from-morado-1500 to-morado-1700 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25}  className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
)
}

export default Home;