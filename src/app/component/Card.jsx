import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const Card = ({ title, description, image, link }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer w-fit">
      <AnimatedSection>
      <div className="relative h-96 w-fit ">
        <Image
          src={image}
          alt={title}
        //   layout="fill"
        width={400}
        height={400}
          objectFit="contain"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        <Link href={link} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
          Learn More
        </Link>
      </div>
      </AnimatedSection>
    </div>
  );
};

export default Card;

