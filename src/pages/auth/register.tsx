import Button from '@/components/common/Button'
import InputGroup from '@/components/forms/InputGroup'
import { ArrowIcon, CreateUserIcon } from '@/components/helpers/Icon'
import Head from 'next/head'
import React, { FormEvent } from 'react'

const Register = () => {
  async function registerUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  return (
    <>
      <Head>
        <title>Register - Bubbles Laundromat</title>
      </Head>
      <div className='flex justify-center items-center mt-28 gap-4 flex-col pb-12'>
        <div>
          <h2 className='text-3xl text-center'>REGISTER</h2>
          <span className='text-gray-100'>Create an account with us</span>
        </div>
        <form className='flex w-4/5 flex-col gap-4 mt-12' onSubmit={registerUser}>
          <InputGroup type='text' labelText='First Name' placeholder='Caleb' />
          <InputGroup type='text' labelText='Last Name' placeholder='Matthew' />
          <InputGroup type='text' labelText='Username' placeholder='caleb081' />
          <InputGroup type='text' labelText='Email' placeholder='caleb@gmail.com' />
          <InputGroup type='text' labelText='Phone Number' placeholder='caleb' />
          <InputGroup type='password' labelText='Password' placeholder='* * * * *' />
          <InputGroup type='password' labelText='Confirm Password' placeholder='* * * * *' />
          <Button text='Create Account' icon={<CreateUserIcon />} />
        </form>
      </div>
    </>
  )
}

export default Register