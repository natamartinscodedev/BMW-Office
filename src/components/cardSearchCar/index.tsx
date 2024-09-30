'use client'

import Image from 'next/image'
import React from 'react'

interface typeParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  title: string
  btnTitle: string
}

const SearchCar = ({ icon, title, btnTitle }: typeParams) => {
  return (
    <>
      <div className="card_search-info">
        <Image src={icon} alt={title} />
        <h2>{title}</h2>
        <button>{btnTitle}</button>
      </div>
    </>
  )
}

export default SearchCar
