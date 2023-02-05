import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                Linkedin <FaLinkedin size={30}/>
            </>
            ),
            href: 'https://www.linkedin.com/in/dalaias-largo-13a5a51aa/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30}/>
            </>
            ),
            href: 'https://github.com/morenalcuadrado',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                Gmail <HiOutlineMail size={30}/>
            </>
            ),
            href: 'Mailto:dalaiaslargol@gmail.com',
            style: 'rounded-tr-md'
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
            </>
            ),
            href: '/resumeOttaDll.pdf',
            style: 'rounded-br-md',
            download: true,
        },

    ]

return (
    <div className='Flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '>
                <a href className='flex justify-between items-center w-full text-white'>
                    <>
                        Linkedin <FaLinkedin size={30}/>
                    </>
                </a>
            </li>
        </ul>
    </div>
);
};

export default SocialLinks;