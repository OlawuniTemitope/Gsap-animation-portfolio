import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html className='absolute left-0 top-0 w-full h-full
     flex justify-center items-center'>
        <div className='w-[10vw] h-[10vw] rounded-full'>
        Loading...
        </div>
    </Html>
  )
}

export default Loader