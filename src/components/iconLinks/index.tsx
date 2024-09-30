'use client'

import React from 'react'

interface typeParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}

export const IconLinks = ({ children }: typeParams) => {
  return (
    <>
      <ul className="box_icon-links">
        <li>{children}</li>
      </ul>
    </>
  )
}
