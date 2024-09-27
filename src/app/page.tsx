'use client'

import Button from '@/components/btn'
import NavBar from '@/components/navBar'

export default function Home() {
  return (
    <>
      <header>
        <div className="gradient-background " />
        <div className="container container_nav-bar">
          <NavBar />
          <section className="container_home-navbar">
            <div className="box_info-navbar">
              <p>
                Puro <b>Prazer</b> de Dirigir
              </p>
              <div className="box_info-car-navbar">
                <div>
                  <h2>BMW 320i</h2>
                  <p>Taxa 0% A.M., 60% entrada + saldo em 24 meses.*</p>
                  <p>Consulte condições.</p>
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
