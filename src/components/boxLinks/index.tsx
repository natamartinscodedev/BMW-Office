'use client'

import React from 'react'

interface typeParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}

const BoxLinks = ({ children }: typeParams) => {
  return (
    <>
      <ul className="box_links">
        <li>{children}</li>
      </ul>
    </>
  )
}

export default BoxLinks
