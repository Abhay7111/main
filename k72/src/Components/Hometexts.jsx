import React from 'react';
import Bgvideo from './Bgvideo';

function Hometexts() {
  return (
    <div className=''>
     <h1 className='w-full text-center flex flex-col items-center uppercase text-[10vw] leading-none font-[font1]'>
          L'étincelle 
          <br /> 
          <span className='flex items-center gap-3'>qui <div className='w-[25vw] h-[10vw] rounded-full overflow-hidden'><Bgvideo/></div>génère</span>
            <div className='relative'>la créativité <div className='absolute top-0 right-0 w-[70%] h-full -z-0 rounded-[50%] border-r border-b border-green-400 '></div></div>
     </h1>
     <div className='w-full flex items-center justify-end'>
          <p className='w-68 font-[font1] text-sm md:text-lg mt-10 md:mt-5'> <span className='px-5'></span> K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
     </div>
    </div>
  )
}

export default Hometexts