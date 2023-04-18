import { InputGroupType } from '@/types/components/form'
import React, { useState } from 'react'
import { EyeClosedIcon, EyeOpenIcon } from '../helpers/Icon'

const InputGroup = ({ labelText, placeholder, type, icon }: InputGroupType) => {
  const [showPassword, setShowPassword] = useState(false)
  const showEyeIcon = showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />

  const toggleInputVisibility = () => setShowPassword(show => !show)

  return (
    <div className='inline-flex flex-col mb-4 relative'>
      <label htmlFor={labelText} className='ml-2 pb-2 text-gray-400 text-lg'>{labelText}</label>
      <input
        id={labelText}
        type={showPassword && type === 'password' ? 'text' : type}
        className={`border-2 relative text-black-400 focus:bg-gray-200 focus:outline-0 py-3 ${icon ? 'pl-12' : 'pl-4'} rounded-xl border-gray-300`}
        placeholder={placeholder}
      />
      <span onClick={toggleInputVisibility} className='absolute top-14 right-4'>{type === 'password' ? showEyeIcon : null}</span>
      {icon ? <span title='input icon' className='h-8 absolute flex items-center justify-center top-12 left-2 w-8 bg-black-400 rounded-full'>{icon}</span> : null}
    </div>
  )
}

export default InputGroup