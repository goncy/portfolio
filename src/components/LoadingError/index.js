import React from 'react'

import { PrimaryColor } from '../common/Themed'

const LoadingError = () => (
  <div className='w-100 vh-100 flex tc items-center justify-center'>
    <PrimaryColor className='f4 measure-wide fadeIn'>
      Hubo un error obteniendo los datos necesarios para mostrar la pagina, por favor, intente nuevamente mas tarde
    </PrimaryColor>
  </div>
)

export default LoadingError
