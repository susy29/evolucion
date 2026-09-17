import {
  ArrowRight,
  Store,
  Users,
  Wrench,
  TrendingUp,
  CheckCircle2,
  FileText,
  GraduationCap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import VisualHero from '../components/VisualHero'
import InfoCard from '../components/InfoCard'
import SectionHeading from '../components/SectionHeading'
import puntoventa from '../images/puntoventa.png'

const steps = [
  {
    number: '1',
    title: 'Regístrate',
    text: 'Déjanos tus datos y cuéntanos sobre tu negocio.',
  },
  {
    number: '2',
    title: 'Inicia tu proceso',
    text: 'Conoce los requisitos y herramientas necesarias.',
  },
  {
    number: '3',
    title: 'Comienza a vender',
    text: 'Integra nuestras soluciones a tu Punto de Venta.',
  },
  {
    number: '4',
    title: 'Llena el formulario',
    text: 'Completa el formulario y nos pondremos en contacto contigo para brindarte la información necesaria y dar seguimiento a tu solicitud.',
  },
]

const benefits = [
  [
    Store,
    'Software para tu negocio',
    'Administra y facilita la operación de tu Punto de Venta.',
  ],
  [
    Users,
    'Una solución práctica',
    'Cuenta con herramientas pensadas para apoyar las actividades de tu negocio.',
  ],
  [
    Wrench,
    'Herramientas y apoyo',
    'Accede a recursos e información para comenzar a utilizar el software.',
  ],
  [
    TrendingUp,
    'Impulsa tu operación',
    'Integra herramientas digitales para mejorar la gestión de tu Punto de Venta.',
  ],
]

export default function SalesPoints() {
  return (
    <div className="page">

      {/* HERO */}
      <VisualHero
        eyebrow="SOFTWARE PARA PUNTOS DE VENTA"
        title="Haz crecer tu negocio con nuestro software comercial."
        text="Conoce nuestra solución de software comercial para tu Punto de Venta y descubre herramientas pensadas para apoyar la operación de tu negocio."
        src={puntoventa}
        primary="Solicitar información"
        primaryLink="/contacto#formulario"
        dark
      />

      {/* BENEFICIOS */}
      <section className="section">
        <div className="shell">

          <SectionHeading
            eyebrow="SOFTWARE COMERCIAL"
            title="Una solución para tu Punto de Venta."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([Icon, title, text]) => (
              <InfoCard
                key={title}
                icon={Icon}
                title={title}
                text={text}
              />
            ))}
          </div>

        </div>
      </section>

      {/* INFORMACIÓN */}
      <section className="bg-[#f5f8fb]">
        <div className="shell section">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <p className="eyebrow">
                TU PUNTO DE VENTA
              </p>

              <h2 className="title">
                Lleva la operación de tu negocio a otro nivel.
              </h2>

              <p className="copy">
                Nuestro software comercial está pensado para apoyar la
                administración y operación de tu Punto de Venta mediante
                herramientas digitales.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  'Herramientas para la operación de tu negocio.',
                  'Solución pensada para Puntos de Venta.',
                  'Acompañamiento durante el proceso.',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[#32A5C7]"
                    />

                    <span className="text-sm font-semibold text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-[#062943] p-8 text-white shadow-xl md:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#45d7df]/10">
                <FileText
                  size={28}
                  className="text-[#32A5C7]"
                />
              </div>

              <h3 className="mt-6 text-2xl font-black">
                ¿Quieres conocer el software?
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Déjanos tus datos y nuestro equipo podrá brindarte información
                sobre la solución y el proceso para comenzar.
              </p>

              <Link
                to="/contacto#formulario"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#ffad1f] px-6 py-3.5 text-sm font-black text-[#062943] transition hover:-translate-y-0.5"
              >
                Solicitar información
                <ArrowRight
                  size={17}
                  className="text-[#32A5C7]"
                />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* 4 PASOS */}
      <section className="bg-[#eaf4f7]">
        <div className="shell section">

          <SectionHeading
            eyebrow="¿CÓMO COMENZAR?"
            title="Comienza en cuatro pasos."
            center
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="soft-card relative flex flex-col"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#168db7] font-black text-white">
                  {step.number}
                </span>

                <h3 className="mt-5 font-black text-[#17324a]">
                  {step.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>

                {step.number === '4' && (
                  <Link
                    to="/contacto#formulario"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#1389b8] transition hover:gap-3"
                  >
                    Llenar formulario
                    <ArrowRight
                      size={16}
                      className="text-[#32A5C7]"
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="dark-band">
        <div className="shell grid gap-8 py-12 lg:grid-cols-[1fr_auto]">

          <div>
            <p className="eyebrow text-cyan-300">
              ¿TIENES DUDAS?
            </p>

            <h2 className="mt-2 text-3xl font-black text-white">
              Estamos para ayudarte.
            </h2>

            <p className="mt-2 text-slate-300">
              Solicita información sobre nuestro software comercial para tu
              Punto de Venta.
            </p>
          </div>

          <div className="flex items-center">
            <Link
              to="/contacto#formulario"
              className="btn-primary"
            >
              Contáctanos
              <ArrowRight
                size={16}
                className="text-[#32A5C7]"
              />
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}