import React, { useState, useEffect } from 'react';

import LOADER from '../Load';
import Logar from '../Logar';

export default function Login() {
  const [loading, setLoading] = useState(true);

  // Depois de 2 segundos muda o status de carregando para falso...
  setTimeout(function () {
    setLoading(false);
  }, 2000);


   // Observa que ao mudar o estado a tela recarrega...

   return (
     loading? <LOADER/>:<Logar/>
   );
}