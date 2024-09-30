'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CardInfoCar from '@/components/cardInfoCar/index'
import CardSearchCar from '@/components/cardSearchCar'
import NavBar from '@/components/navBar'
import Logo from '@/img/bmw-logo.svg'
import CarHome from '@/img/bmw-home.png'
import Card0km from '@/img/NxW_Home_ICON_STOCK_CAR.webp'
import CarUsed from '@/img/NxW_Home_ICON_USED_CAR.webp'
import CarConfig from '@/img/NxW_Home_ICON_CON.webp'
import carFamily from '@/img/bmw-familly.webp'
import carSpeed from '@/img/bmw-speed.webp'
import BoxLinks from '@/components/boxLinks'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { IconLinks } from '@/components/iconLinks'

export default function Home() {
  // this values it's be returned api
  const nameCar = 'BMW 320i'
  const infoCar = 'Taxa 0% A.M., 60% entrada + saldo em 24 meses.*'

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
              <CardInfoCar
                title={nameCar}
                infoCar={infoCar}
                subTitle="Consulte condições."
              />
            </div>
          </section>
        </div>
      </header>
      <main>
        <section className="section_search-car">
          <div className="box_search-car container">
            <p data-aos="fade-down" data-aos-delay="200">
              Procure e compre
            </p>
            <h2 data-aos="fade-down" data-aos-delay="300">
              ENCONTRE O SEU BMW.
            </h2>
            <div className="box_cads-serach">
              <div data-aos="fade-right" data-aos-delay="350">
                <CardSearchCar
                  icon={Card0km}
                  title="Encontre um 0 KM"
                  btnTitle="Pesquisar"
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="360">
                <CardSearchCar
                  icon={CarUsed}
                  title="Encontre um seminovo"
                  btnTitle="Pesquisar"
                />
              </div>
              <div data-aos="fade-left" data-aos-delay="370">
                <CardSearchCar
                  icon={CarConfig}
                  title="Configure o seu"
                  btnTitle="Configuração e Preço"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="card_bmw-ix">
            <div className="box_bg-cars">
              <Image src={carFamily} alt="" />
            </div>
            <div className="container container_info-cars">
              <CardInfoCar
                title="BMW iX xDrive40."
                infoCar="24 parcelas mensais de R$ 3.809 + entrada + parcela final.*"
                subTitle="Consulte condições."
              />
            </div>
          </div>

          <div className="box_separation" />

          <div className="card_bmw-i4">
            <div className="box_bg-cars">
              <Image src={carSpeed} alt="" />
            </div>
            <div className="container container_info-cars">
              <CardInfoCar
                title="BMW i4."
                infoCar="Taxa 0% A.M., 60% entrada + saldo em 24 meses.*"
                subTitle="Consulte condições."
              />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container container_sections-footer">
          <section className="container container_links">
            <div className="box_logo">
              <Image src={Logo} alt="" />
            </div>
            <div className="box_links">
              <BoxLinks>
                <Link href="#">Contato</Link>
                <Link href="#">Fale com a BMW</Link>
                <Link href="#">Carreiras</Link>
                <Link href="#">Visita à Fábrica</Link>
                <Link href="#">Relatório de transparência salarial</Link>
              </BoxLinks>
              <BoxLinks>
                <Link href="#">Meu BMW</Link>
                <Link href="#">Solicite uma proposta</Link>
                <Link href="#">Modelos e Preços</Link>
                <Link href="#">Simule seu Financiamento</Link>
                <Link href="#">Consórcio</Link>
                <Link href="#">Portal do Cliente</Link>
              </BoxLinks>
              <BoxLinks>
                <Link href="#">BMW ConnectedDrive</Link>
                <Link href="#">Fale conosco</Link>
                <Link href="#">FAQ</Link>
              </BoxLinks>
            </div>
          </section>
          <section className="box_midia container">
            <IconLinks>
              <Link href="#">
                <Facebook size={25} />
              </Link>
              <Link href="#">
                <Instagram size={25} />
              </Link>
              <Link href="#">
                <Twitter size={25} />
              </Link>
              <Link href="#">
                <Linkedin size={25} />
              </Link>
              <Link href="#">
                <Youtube size={25} />
              </Link>
            </IconLinks>
          </section>
          <section className="box_polityc container">
            <p>© BMW AG 2024</p>
            <ul className="box_polityc-links">
              <li>
                <Link href="#">Política de Cookies</Link>
              </li>
              <li>
                <Link href="#">Política de Privacidade</Link>
              </li>
              <li>
                <Link href="#">Disponibilidade de Produtos</Link>
              </li>
              <li>
                <Link href="#">Recall</Link>
              </li>
              <li>
                <Link href="#">Manual de Segurança</Link>
              </li>
              <li>
                <Link href="#">Informações Legais</Link>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </>
  )
}
