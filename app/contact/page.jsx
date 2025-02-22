import React from 'react'
import Image from 'next/image';
import contact from "../assets/contact.jpg";
export default function ContactPage ()  {
  return (
    <section>
        <Image 
        src={contact}
        alt="My Image" 
        width={500} 
        height={300} 
        className='w-full h-screen object-cover'
      />
        <h1>Contact</h1>
    </section>
  )
}

 