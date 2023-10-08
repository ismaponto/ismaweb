import React from 'react';
import CasodeExito1 from './casosDeExito/CasodeExito1';
import CasodeExito2 from './casosDeExito/CasodeExito2';
import CasodeExito3 from './casosDeExito/CasodeExito3';


const CasodeExito = () => {
  return (<div className="flex flex-row flex-wrap justify-around md:flex-col ">
 
  <h2 className="mb-2 flex flex-col center bg-teal-500  justify-center w-full text-3xl  text-gray-50 text-bold dark:text-white h-36 ">
  Algunas paginas que ya hemos desarrollado para clientes satisfechos
  </h2>

  <div className="p-5">
    <CasodeExito1  />
  </div>
  <div className="p-5">
    <CasodeExito2  />
  </div>
  <div className="p-5">
    <CasodeExito3 />
  </div>
  


</div>

  );
};

export default CasodeExito;
