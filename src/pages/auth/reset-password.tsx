import Button from '@/components/common/Button'
import InputGroup from '@/components/forms/InputGroup'
import { ArrowIcon, EmailIcon } from '@/components/helpers/Icon'
import Head from 'next/head'
import React, { FormEvent } from 'react'

const ResetPassword = () => {
  async function resetUserPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }
  return (
    <>
      <Head>
        <title>Reset Password - Bubbles Laundromat</title>
      </Head>
      <div className='flex justify-center items-center mt-28 gap-4 flex-col pb-12'>
        <div className='text-center'>
          <h2 className='text-3xl'>RESET PASSWORD</h2>
          <span className='text-gray-100'>Recover your account</span>
        </div>
        <form className='flex w-4/5 flex-col gap-4 mt-12' onSubmit={resetUserPassword}>
          <InputGroup type='email' labelText='Email' placeholder='caleb@gmail.com' icon={<EmailIcon />} />
          <Button text='Reset Account' icon={<ArrowIcon />} />
        </form>
      </div>
    </>
  )
}

export default ResetPassword