import {
  FileText,
  Headphones,
  LifeBuoy,
  Wrench,
  Package,
  GraduationCap,
} from 'lucide-react'

import VisualHero from '../components/VisualHero'
import InfoCard from '../components/InfoCard'
import SectionHeading from '../components/SectionHeading'
import soporteImage from '../images/soporte.png'

export default function Support() {
  const data = [
    [
      LifeBuoy,
      'Centro de ayuda',
      'Accede a información y recursos de apoyo.',
    ],
    [
      Wrench,
      'Herramientas',
      'Recursos para facilitar la operación.',
    ],
    [
      Package,
      'Productos y servicios',
      'Información sobre soluciones disponibles.',
    ],
    [
      FileText,
      'Material comercial',
      'Documentación y recursos útiles.',
    ],
    [
      GraduationCap,
      'Capacitación',
      'Guías y recursos para comenzar.',
    ],
    [
      Headphones,
      'Soporte y atención',
      'Canales para resolver dudas.',
    ],
  ]

  return (
    <div className="page">

      {/* HERO */}
      <VisualHero
        eyebrow="SOPORTE PARA SOCIOS"
        title="Te acompañamos en cada paso."
        text="Brindamos herramientas, capacitación y atención para que puedas encontrar información y recursos cuando los necesites."
        image={soporteImage}
        primary="Ir a contacto"
        primaryLink="/contacto"
        dark
      />

      {/* HERRAMIENTAS Y APOYO */}
      <section className="section">
        <div className="shell">

          <SectionHeading
            eyebrow="HERRAMIENTAS Y APOYO"
            title="Todo lo que necesitas para avanzar."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.map(([I, t, d]) => (
              <InfoCard
                key={t}
                icon={I}
                title={t}
                text={d}
              />
            ))}
          </div>

        </div>
      </section>

      {/* APOYO */}
      <section className="shell pb-16">
        <div className="grid overflow-hidden rounded-[28px] bg-[#082a47] lg:grid-cols-[1fr_.8fr]">

          {/* TEXTO */}
          <div className="p-8 text-white md:p-12">
            <p className="eyebrow text-cyan-300">
              TU ÉXITO TAMBIÉN ES EL NUESTRO
            </p>

            <h2 className="mt-2 text-[#32A5C7]xl font-black">
              Estamos para apoyarte.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Encuentra materiales, herramientas y canales de soporte para
              acompañar tu operación.
            </p>
          </div>

          {/* IMAGEN */}
          <div className="flex items-center justify-center bg-[#082a47] p-6 md:p-8">
            <img
              className="h-[230px] w-[90%] rounded-2xl object-cover lg:h-[280px]"
              src={soporteImage}
              alt="Soporte Evolución Telefónica"
            />
          </div>

        </div>
      </section>

    </div>
  )
}