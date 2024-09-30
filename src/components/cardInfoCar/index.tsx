'use client'

import React from 'react'
import Button from '@/components/btn'

interface typeParams {
  title: string
  infoCar: string
  subTitle: string
}

const InfoCar = ({ title, subTitle, infoCar }: typeParams) => {
  return (
    <>
      <div className="box_info-car">
        <h2 data-aos="fade-right" data-aos-delay="200">
          {title}
        </h2>
        <p data-aos="fade-right" data-aos-delay="300">
          {infoCar}
        </p>
        <p data-aos="fade-right" data-aos-delay="400">
          {subTitle}
        </p>
        <Button title="Saiba mais" />
      </div>
    </>
  )
}

export default InfoCar
