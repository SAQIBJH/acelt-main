// import React from 'react';
// import Image from 'next/image';
// import AnimatedSection from './AnimatedSection';

// const clients = [
//   { id: 1, image: "/BKL.png" },
//   { id: 2, image: "/ULMA.png" },
//   { id: 3, image: "/Rhinoflex.png" },
//   { id: 4, image: "/BMTC.png" },
//   { id: 5, image: "/Benkan.png" },
//   { id: 6, image: "/Tachen.png" },
//   { id: 7, image: "/Jiuli.png" },
//   { id: 8, image: "/Mega.png" },
//   { id: 9, image: "/Hyundai-steel.png" },
// ];

// const ClientsSection = () => {
//   return (
//     <AnimatedSection>
//     <section className="py-16 mx-auto" id="clients-section">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-center">
//           <div className="w-full  px-4">
//             <h2 className="text-3xl font-bold mb-2 flex w-full justify-center text-black">OUR PARTNERS</h2>
//             <div className="h-1 w-16 bg-blue-500 mb-8 flex mx-auto justify-center"></div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//               {clients.map((client) => (
//                 <div key={client.id} className=" rounded-lg shadow-md">
//                   <Image
//                     src={client.image}
//                     alt={`Client ${client.id}`}
//                     width={200}
//                     height={200}
//                     objectFit="contain"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     </AnimatedSection>
//   );
// };

// export default ClientsSection;

"use client"
import Image from "next/image"
import AnimatedSection from "./AnimatedSection"

const clients = [
  { id: 1, image: "/BKL.png" },
  { id: 2, image: "/ULMA.png" },
  { id: 3, image: "/Rhinoflex.png" },
  { id: 4, image: "/BMTC.png" },
  { id: 5, image: "/Benkan.png" },
  { id: 6, image: "/Tachen.png" },
  { id: 7, image: "/Jiuli.png" },
  { id: 8, image: "/Mega.png" },
  { id: 9, image: "/Hyundai-steel.png" },
]

const ClientsSection = () => {
  return (
    <AnimatedSection>
      <section className="py-16 bg-white" id="clients-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black">OUR PARTNERS</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-40 transition-transform hover:scale-105"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.image || "/placeholder.svg"}
                    alt={`Partner ${client.id}`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

export default ClientsSection
