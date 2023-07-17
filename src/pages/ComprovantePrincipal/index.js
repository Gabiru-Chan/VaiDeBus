import React, { useState, useEffect } from 'react';


import Comprov2 from '../Comprov2';
import Comprov1 from '../Comprov1';

export default function Comprovante() {
  const [loading, setLoading] = useState(true);

  // Depois de 2 segundos muda o status de carregando para falso...
  setTimeout(function () {
    setLoading(false);
  }, 4000);


   // Observa que ao mudar o estado a tela recarrega...

   return (
     loading? <Comprov1/>:<Comprov2/>
   );
}