import { ButtonType } from '@/types/components/common'
import React from 'react'

const Button = ({ text, icon }: ButtonType) => {
  return (
    <button className='bg-black-400 flex px-6 items-center transition duration-700 ease-in-out gap-4 active:gap-6 justify-center text-white text-xl rounded-xl p-2 py-4'>
      <span className='text-white'>{text}</span>
      {icon ? <span>{icon}</span> : null}
    </button>
  )
}

export default Button