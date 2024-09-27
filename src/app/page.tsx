'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Button from '@/components/btn'
import NavBar from '@/components/navBar'
import CarHome from '@/img/bmw-home.png'

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <header>
        <div className="gradient-background " />
        <div className="card_img-home-bg">
          <Image src={CarHome} alt="" />
        </div>
        <div className="container container_nav-bar">
          <NavBar />
          <section className="container_home-navbar">
            <div className="box_info-navbar">
              <p data-aos="fade-right" data-aos-delay="1000">
                Puro <b>Prazer</b> de Dirigir
              </p>
              <div className="box_info-car-navbar">
                <div>
                  <h2 data-aos="fade-right" data-aos-delay="200">
                    BMW 320i
                  </h2>
                  <p data-aos="fade-right" data-aos-delay="300">
                    Taxa 0% A.M., 60% entrada + saldo em 24 meses.*
                  </p>
                  <p data-aos="fade-right" data-aos-delay="400">
                    Consulte condições.
                  </p>
                </div>
                <Button title="Saiba mais" />
              </div>
            </div>
          </section>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  )
}
