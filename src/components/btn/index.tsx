'use client'

import React from 'react'

interface typeParams {
  title: string
}

const Button = ({ title }: typeParams) => {
  return <button className='btn'>{title}</button>
}

export default Button
