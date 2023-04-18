import Button from '@/components/common/Button'
import InputGroup from '@/components/forms/InputGroup'
import { ArrowIcon, EyeClosedIcon, LockIcon, UserIcon } from '@/components/helpers/Icon'
import Head from 'next/head'
import React, { FormEvent } from 'react'


const Login = () => {
  async function loginUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  return (
    <>
      <Head>
        <title>Login - Bubbles Laundromat</title>
      </Head>
      <div className='flex justify-center items-center mt-28 gap-4 flex-col pb-12'>
        <div>
          <h2 className='text-3xl text-center'>LOGIN</h2>
          <span className='text-gray-100'>Get back into your account</span>
        </div>
        <form className='flex w-4/5 flex-col gap-4 mt-12' onSubmit={loginUser}>
          <InputGroup type='text' labelText='Username' placeholder='caleb' icon={<UserIcon />} />
          <InputGroup type='password' labelText='Password' placeholder='* * * * *' icon={<LockIcon />} />
          <Button text='Sign In' icon={<ArrowIcon />} />
        </form>
      </div>
    </>
  )
}

export default Login