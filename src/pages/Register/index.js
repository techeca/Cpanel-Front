import React from 'react'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import FormRegister from './FormRegister'
import configData from '../../config/register.json'

export default function Register(){

  return(
    <section className="w-full">
      <div className="flex flex-col items-center justify-center mt-20 lg:py-0">
        <FormRegister fr={configData} />
      </div>
    </section>
  )
}