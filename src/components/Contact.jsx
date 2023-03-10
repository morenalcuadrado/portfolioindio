import React from 'react';

const Contact = () => {
return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-morado-1700 to-black p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me.</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/40b29b56-00f5-4855-a925-7335647a3be0" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="hidden" name="_gotcha" />
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name='nemail' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder='Leave your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b border-2 border-white from-morado-1500 to-morado-1700 px-6 py-3 my-8 mx-auto flex intems-center rounded-md hover:scale-110 duration-300'>
                        Let's talk
                    </button>
                </form>
            </div>
        </div>
    </div>
);
};
// Agregar Antispam y otros atributos buenos del form.
export default Contact;