import React from 'react'
import Head from 'next/head'
import AnimatedSection from './AnimatedSection';

export default function Projects() {


const projects = [
    {
      year: 2015,
      projectName: 'SAUDI ARAMCO JAZAN REFINERY PROJECTS',
      department: 'PROJECTS DEPARTMENT SOUTH TANK FARM & GAS TREATMENT DIVISION',
      client: 'SAUDI ARAMCO',
      description: 'SUPPLY OF COPPER NICKEL PIPES SIZES UP TO 1½".',
    },
    {
      year: 2016,
      projectName: 'JAZAN REFINERY PROJECT 187657 LIN/LOX TANKS AIR PRODUCTS PLC',
      department: 'JAZAN-KSA',
      client: 'AIR PRODUCTS PLC',
      description: 'SUPPLY OF PLATES, SS SHEETS AND FLAT BARS.',
    },
    {
      year: 2017,
      projectName: 'GASCO RUWAIS PARAFFINIC NAPHTHA TANKS FIRE PROTECTION UPGRADE PROJECT 05638- EPC WORKS',
      department: 'GASCO',
      client: 'GASCO',
      description: 'SUPPLY OF STAINLESS STEEL PIPES, BUTTWELD FITTINGS, FLANGES AND OLETS.',
    },
    {
      year: 2017,
      projectName: 'SAUDI ARAMCO MSAE014: NORTHERN ARABIA AREA UNCONVENTIONAL GAS (UG) SURFACE FACILITIES SYSTEM B-PROJECT',
      department: 'TURAIF, KSA',
      client: 'SAUDI ARAMCO',
      description: 'SUPPLY OF CARBON STEEL PIPES, FLANGES AND FORGED FITTINGS.',
    },
    {
      year: 2019,
      projectName: 'PETRONAS CARIGALI IRAQ PROVISION OF ENGINEERING, PROCUREMENT, CONSTRUCTION & COMMISSIONING FOR OIL TRAIN 3, 4 & 5 OF GARRAF PROJECT',
      department: 'PETRONAS CARIGALI IRAQ',
      client: 'PETRONAS CARIGALI',
      description: 'SUPPLY OF STUD BOLTS AND GASKETS.',
    },
    {
      year: 2020,
      projectName: 'ADNOC OFFSHORE DAS ISLAND SHUTDOWN SUPPLY FOR CARBON STEEL VALVES',
      department: 'ADNOC OFFSHORE',
      client: 'ADNOC',
      description: 'SUPPLY OF CUNI PIPES & FITTINGS, STAINLESS STEEL PIPES.',
    },
  ];


  return (
    <>
    <Head>
        <title>Our Projects | Ace Energy</title>
        <meta name="description" content="Our Projects - Ace Energy" />
        
      </Head>
      <AnimatedSection>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
        
        <h1 className="py-4 flex text-4xl items-center md:text-5xl font-bold uppercase tracking-[0.05em]">
  <span className="text-black">Our Proj</span>
  <span className="text-red-600 tracking-[0.1em]">e</span>
  <span className="text-black tracking-[0.1em]">cts</span>
</h1>

          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h2 className="text-xl font-semibold text-gray-800">{project.projectName}</h2>
                <p className="text-gray-600 text-sm italic mb-2">
                  <span className="font-semibold">Client:</span> {project.client} |{' '}
                  <span className="font-semibold">Year:</span> {project.year}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Department:</span> {project.department}
                </p>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </AnimatedSection>
    </>
  )
}
