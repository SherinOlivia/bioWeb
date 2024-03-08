"use client";
import React, { useState } from 'react';
import GitHubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const ContactSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
        };
        console.log(data, data.email, data.subject, data.message)
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
    
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSONdata,
        };
    
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(response, "tambah", resData)
        if (response.status === 200) {
          console.log("Message sent.");
          setEmailSubmitted(true);
        }
    };

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect!</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Maiores aliquam dolores similique esse officiis, animi laudantium nemo molestias, 
                totam consequuntur, aut minus atque aspernatur accusamus odio quo 
                expedita error sapiente!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="github.com">
                    <Image src={GitHubIcon} alt="GitHub Icon" />
                </Link>
                <Link href="linkedin.com">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label 
                        htmlFor='email' 
                        className='text-white block mb-2 text-sm font-medium'>
                        Your Email
                    </label>
                    <input  
                        name="email"
                        type="email" 
                        id="email" 
                        required 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Doe@mail.com" />
                </div>
                <div className='mb-6'>
                    <label 
                        htmlFor='subject' 
                        className='text-white block mb-2 text-sm font-medium'>
                        Subject
                    </label>
                    <input  
                        name='subject'
                        type="text" 
                        id="subject" 
                        required 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Hello!" />
                </div>
                <div className='mb-6'>
                    <label 
                        htmlFor='message' 
                        className='text-white block mb-2 text-sm font-medium'>
                        Message
                    </label>
                    <textarea  
                        name="message" 
                        id="message" 
                        required 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Let's talk about..." />
                </div>
                <button 
                    type="submit"
                    className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                >
                    Send Message
                </button>
                {
                    emailSubmitted && (
                    <p className=' text-green-500 text-sm mt-2'>
                        Email sent Successfully!
                    </p>
                    )
                }
            </form>
        </div>
    </section>
  )
}

export default ContactSection