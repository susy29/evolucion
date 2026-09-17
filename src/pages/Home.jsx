import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Headphones,
  RefreshCw,
  Wifi,
  Briefcase,
  Zap,
  ShieldCheck,
  Clock3,
  MessageCircle,
  SmartphoneNfc,
  Download,
  Globe,
  Apple,
  Sparkles,
  Phone,
} from 'lucide-react'

import InfoCard from '../components/InfoCard'
import VisualHero from '../components/VisualHero'

import att from '../images/at&t.png'
import bait from '../images/bait.png'
import movistar from '../images/movistar.png'
import unefon from '../images/unefon.png'
import app from '../images/app.png'

const ICON_COLOR = 'text-[#32A5C7]'

const PHONE_NUMBER = '9511211900'
const PHONE_DISPLAY = '951 121 1900'
const WHATSAPP_URL = 'https://wa.me/529511211900'

export default function Home() {
  const companies = [
    { name: 'AT&T', image: att },
    { name: 'BAIT', image: bait },
    { name: 'Movistar', image: movistar },
    { name: 'Unefon', image: unefon },
  ]

  const solutions = [
    {
      icon: SmartphoneNfc,
      title: 'eSIM',
      text: 'Conectividad digital con una alternativa práctica y moderna.',
    },
    {
      icon: Wifi,
      title: 'Tiempo aire por mayoreo',
      text: 'Soluciones para la comercialización de tiempo aire.',
    },
    {
      icon: Smartphone,
      title: 'SIM física',
      text: 'Opciones de SIM para diferentes necesidades de conectividad.',
    },
    {
      icon: RefreshCw,
      title: 'Portabilidad',
      text: 'Cambia de compañía conservando tu número.',
    },
    {
      icon: Briefcase,
      title: 'Software comercial',
      text: 'Herramientas para facilitar la operación de tu negocio.',
    },
  ]

  const features = [
    {
      icon: SmartphoneNfc,
      title: 'eSIM',
      text: 'Una alternativa digital dentro de nuestra oferta de conectividad.',
    },
    {
      icon: Smartphone,
      title: 'Telefonía',
      text: 'Soluciones para diferentes necesidades de comunicación.',
    },
    {
      icon: Zap,
      title: 'Activaciones',
      text: 'Realiza tus activaciones de manera rápida y sencilla.',
    },
  ]

  return (
    <div className="page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <VisualHero
        eyebrow="EVOLUCIÓN TELEFÓNICA"
        title="Soluciones de telefonía para hacer crecer tu negocio."
        text="Integramos soluciones de conectividad, activaciones y herramientas comerciales para ayudarte a llevar tu negocio al siguiente nivel."
        src={app}
        primaryLink="#soluciones"
        dark
      />

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="section">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">

          <div>
            <p className="eyebrow">UNA SOLA PLATAFORMA</p>

            <h2 className="title">
              Todo lo que necesitas para impulsar tu negocio.
            </h2>

            <p className="copy mt-5">
              En Evolución Telefónica trabajamos con diferentes soluciones
              de telefonía y herramientas comerciales para ofrecerte
              alternativas prácticas, accesibles y pensadas para tu negocio.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                [
                  'Soluciones integrales',
                  'Diferentes opciones para complementar tu negocio.',
                ],
                [
                  'Herramientas comerciales',
                  'Tecnología pensada para facilitar tus operaciones.',
                ],
                [
                  'Diferentes compañías',
                  'Trabajamos con distintas alternativas de telefonía.',
                ],
                [
                  'Atención cercana',
                  'Estamos disponibles para acompañarte.',
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-2xl p-3 transition hover:bg-[#f5f8fb]"
                >
                  <CheckCircle2
                    size={21}
                    className={`${ICON_COLOR} mt-0.5 shrink-0`}
                  />

                  <div>
                    <h3 className="font-black text-[#17324a]">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[32px] bg-[#062943] p-7 shadow-[0_25px_70px_rgba(6,41,67,.20)] md:p-9">

            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#32A5C7]/20 blur-3xl transition duration-500 group-hover:scale-125" />

            <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Briefcase size={27} className={ICON_COLOR} />
              </div>

              <p className="mt-7 text-xs font-black tracking-[.18em] text-cyan-300">
                SOFTWARE COMERCIAL
              </p>

              <h3 className="mt-3 text-2xl font-black text-white md:text-3xl">
                Lleva herramientas digitales a tu Punto de Venta.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Conoce nuestro software comercial y descubre cómo puede
                ayudarte a administrar y operar tu negocio.
              </p>

              <Link
                to="/puntos-de-venta"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-[#062943] transition hover:-translate-y-1 hover:shadow-lg"
              >
                Conocer software
                <ArrowRight size={16} />
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          COMPAÑÍAS
      ===================================================== */}
      <section className="bg-[#f5f8fb]">
        <div className="shell section">

          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">NUESTROS ALIADOS</p>

            <h2 className="title">
              Trabajamos con diferentes compañías.
            </h2>

            <p className="copy mt-4">
              Conoce algunas de las compañías disponibles dentro de
              nuestras soluciones de telefonía.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">

            {companies.map((company) => (
              <div
                key={company.name}
                className="group flex min-h-[160px] items-center justify-center rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,41,67,.12)]"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="max-h-[95px] w-auto max-w-[190px] object-contain transition duration-300 group-hover:scale-110"
                />
              </div>
            ))}

          </div>

          <div className="mt-8 text-center">
            <Link
              to="/companias"
              className="inline-flex items-center gap-2 text-sm font-black text-[#17324a] transition hover:text-[#32A5C7]"
            >
              Conocer compañías
              <ArrowRight size={16} className={ICON_COLOR} />
            </Link>
          </div>

        </div>
      </section>

      {/* =====================================================
          SOLUCIONES
      ===================================================== */}
      <section id="soluciones" className="section scroll-mt-24">
        <div className="shell">

          <SectionHeading
            eyebrow="NUESTRAS SOLUCIONES"
            title="Soluciones pensadas para tu negocio."
            text="Encuentra alternativas de conectividad y herramientas comerciales que pueden adaptarse a tus necesidades."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {solutions.map((solution) => {
              const Icon = solution.icon

              return (
                <div
                  key={solution.title}
                  className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(6,41,67,.12)]"
                >

                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#32A5C7]/10 opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf4f7] transition duration-300 group-hover:scale-110">
                    <Icon size={23} className={ICON_COLOR} />
                  </div>

                  <h3 className="relative mt-5 font-black leading-5 text-[#17324a]">
                    {solution.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-6 text-slate-500">
                    {solution.text}
                  </p>

                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          CONECTIVIDAD
      ===================================================== */}
      <section className="bg-[#eaf4f7]">
        <div className="shell section grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">

          <div className="group relative overflow-hidden rounded-[30px] bg-white shadow-[0_20px_60px_rgba(13,48,72,.12)]">

            <img
              src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=85"
              alt="Soluciones de conectividad"
              className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#062943]/40 to-transparent" />

          </div>

          <div>

            <p className="eyebrow">CONECTIVIDAD</p>

            <h2 className="title">
              Alternativas digitales para mantenerte conectado.
            </h2>

            <p className="copy mt-5">
              Explora nuestras opciones de conectividad y encuentra la
              solución que mejor se adapte a las necesidades de tu negocio.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                'eSIM',
                'SIM física',
                'Portabilidad',
                'Tiempo aire por mayoreo',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/70 p-3"
                >
                  <CheckCircle2
                    size={20}
                    className={ICON_COLOR}
                  />

                  <span className="font-bold text-[#17324a]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <Link
              to="/soluciones"
              className="btn-primary mt-8"
            >
              Ver soluciones
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================================
          APP
      ===================================================== */}
      <section className="section">
        <div className="shell">

          <div className="relative overflow-hidden rounded-[38px] bg-[#062943] shadow-[0_30px_80px_rgba(6,41,67,.22)]">

            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#32A5C7]/15 blur-3xl" />

            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative grid items-center lg:grid-cols-[1fr_.85fr]">

              <div className="p-8 md:p-12 lg:p-14">

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black tracking-[.14em] text-cyan-200">
                  <Sparkles size={14} />
                  NUESTRA APP
                </div>

                <h2 className="mt-6 max-w-xl text-4xl font-black leading-tight text-white md:text-5xl">
                  Lleva tus herramientas contigo.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                  Consulta nuestra aplicación y accede a las herramientas
                  disponibles para realizar tus operaciones de manera práctica.
                </p>

                <div className="mt-8 grid gap-3">

                  {features.map((item) => {
                    const Icon = item.icon

                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.06] p-4 transition hover:bg-white/10"
                      >

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                          <Icon
                            size={20}
                            className={ICON_COLOR}
                          />
                        </div>

                        <div>
                          <h3 className="font-black text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-slate-400">
                            {item.text}
                          </p>
                        </div>

                      </div>
                    )
                  })}

                </div>

                <div className="mt-9">

                  <p className="mb-3 text-xs font-black uppercase tracking-[.16em] text-slate-400">
                    Descarga la aplicación
                  </p>

                  <div className="flex flex-wrap gap-3">

                    <a
                      href="https://play.google.com/store/apps/details?id=att.evolution.neixt&pli=1"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-[#062943] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      <Download size={18} />

                      <div className="text-left">
                        <span className="block text-[10px] font-bold text-slate-500">
                          DISPONIBLE EN
                        </span>

                        <span className="block text-sm font-black">
                          Google Play
                        </span>
                      </div>
                    </a>

                    <a
                      href="https://apps.apple.com/us/app/activaciones-the-evolution/id6752675369"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-white transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                    >
                      <Apple size={20} />

                      <div className="text-left">
                        <span className="block text-[10px] font-bold text-slate-400">
                          DISPONIBLE EN
                        </span>

                        <span className="block text-sm font-black">
                          App Store
                        </span>
                      </div>
                    </a>

                    <a
                      href="https://evolucion-telefonica-app.com/login"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-white transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                    >
                      <Globe size={19} />

                      <div className="text-left">
                        <span className="block text-[10px] font-bold text-slate-400">
                          TAMBIÉN PUEDES USAR
                        </span>

                        <span className="block text-sm font-black">
                          Versión web
                        </span>
                      </div>
                    </a>

                  </div>
                </div>

              </div>

              <div className="relative h-full min-h-[500px] overflow-hidden lg:min-h-[620px]">

                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#062943] via-[#062943]/30 to-transparent lg:bg-gradient-to-r" />

                <img
                  src={app}
                  alt="Aplicación de Evolución Telefónica"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                />

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          ACTIVACIONES
      ===================================================== */}
      <section className="bg-[#f5f8fb]">
        <div className="shell section">

          <div className="mx-auto max-w-3xl text-center">

            <p className="eyebrow">ACTIVACIONES</p>

            <h2 className="title">
              Realiza tus activaciones de manera rápida y sencilla.
            </h2>

            <p className="copy mt-4">
              Nuestro chatbot está diseñado exclusivamente para ayudarte
              a realizar activaciones de forma práctica.
            </p>

          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-[30px] bg-white p-7 shadow-[0_18px_50px_rgba(13,48,72,.10)] md:p-9">

            <div className="flex flex-col items-center text-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eaf4f7]">
                <MessageCircle
                  size={30}
                  className={ICON_COLOR}
                />
              </div>

              <h3 className="mt-5 text-2xl font-black text-[#17324a]">
                Chat de activaciones
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                Utiliza nuestro canal de activaciones para realizar el
                proceso de manera rápida y sencilla.
              </p>

              <a
                href="https://wa.me/5219514351322"
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-7"
              >
                Realizar activación
                <ArrowRight size={16} />
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          POR QUÉ
      ===================================================== */}
      <section className="section">
        <div className="shell">

          <SectionHeading
            eyebrow="¿POR QUÉ EVOLUCIÓN TELEFÓNICA?"
            title="Tecnología que acompaña tu crecimiento."
            text="Creamos soluciones para facilitar la operación de negocios que buscan incorporar nuevas herramientas de telefonía y tecnología."
            center
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <InfoCard
              icon={ShieldCheck}
              title="Soluciones confiables"
              text="Alternativas pensadas para las necesidades actuales de tu negocio."
            />

            <InfoCard
              icon={Clock3}
              title="Procesos prácticos"
              text="Herramientas diseñadas para facilitar tus operaciones."
            />

            <InfoCard
              icon={Headphones}
              title="Acompañamiento"
              text="Canales de atención para brindarte información y orientación."
            />

          </div>

        </div>
      </section>

      {/* =====================================================
          SOFTWARE
      ===================================================== */}
      <section className="dark-band">

        <div className="shell grid gap-8 py-14 lg:grid-cols-[1fr_auto] lg:items-center">

          <div>

            <p className="eyebrow text-cyan-300">
              SOFTWARE COMERCIAL
            </p>

            <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
              Lleva nuestro software a tu Punto de Venta.
            </h2>

            <p className="mt-4 max-w-2xl text-slate-300">
              Conoce las herramientas disponibles para facilitar la
              administración y operación de tu negocio.
            </p>

          </div>

          <Link
            to="/puntos-de-venta"
            className="btn-primary"
          >
            Conocer software
            <ArrowRight size={16} />
          </Link>

        </div>
      </section>

      {/* =====================================================
          SOPORTE
      ===================================================== */}
      <section className="section">
        <div className="shell">

          <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">

            {/* TEXTO */}
            <div>

              <p className="eyebrow">
                SOPORTE
              </p>

              <h2 className="title">
                Estamos para ayudarte.
              </h2>

              <p className="copy mt-5 max-w-xl">
                Si necesitas información o asistencia, nuestro equipo
                está disponible para atenderte a través de nuestros
                canales de contacto.
              </p>

              <Link
                to="/soporte"
                className="btn-primary mt-7"
              >
                Ir a soporte
                <ArrowRight size={16} />
              </Link>

            </div>

            {/* CONTACTO */}
            <div className="relative overflow-hidden rounded-[30px] bg-[#062943] p-7 shadow-[0_25px_60px_rgba(6,41,67,.18)] md:p-9">

              {/* Decoración */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#32A5C7]/20 blur-3xl" />

              <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    <Phone
                      size={25}
                      className="text-cyan-300"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[.16em] text-cyan-300">
                      Atención
                    </p>

                    <h3 className="mt-1 text-xl font-black text-white">
                      Comunícate con nosotros
                    </h3>
                  </div>

                </div>

                {/* NÚMERO */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-7 block text-3xl font-black tracking-tight text-white transition hover:text-cyan-300 sm:text-4xl"
                >
                  {PHONE_DISPLAY}
                </a>

                <p className="mt-2 text-sm text-slate-400">
                  Elige el canal que prefieras para recibir atención.
                </p>

                {/* BOTONES */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-[#062943] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Phone
                      size={18}
                      className="transition group-hover:scale-110"
                    />

                    Llamar ahora
                  </a>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                  >
                    <MessageCircle
                      size={18}
                      className="text-cyan-300 transition group-hover:scale-110"
                    />

                    WhatsApp
                  </a>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CONTACTO
      ===================================================== */}
      <section className="bg-[#f5f8fb]">
        <div className="shell section">

          <div className="mx-auto max-w-3xl text-center">

            <p className="eyebrow">
              CONTACTO
            </p>

            <h2 className="title">
              ¿Necesitas más información?
            </h2>

            <p className="copy mt-4">
              Ponte en contacto con nosotros y conoce más sobre nuestras
              soluciones.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">

              <Link
                to="/contacto#formulario"
                className="btn-primary"
              >
                Contáctanos
                <ArrowRight size={16} />
              </Link>

              <a
                href="mailto:ventas@evolucion-telefonica.com"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-[#17324a] transition hover:bg-slate-50"
              >
                Escríbenos
                <ArrowRight
                  size={16}
                  className={ICON_COLOR}
                />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="section pt-0">
        <div className="shell">

          <div className="overflow-hidden rounded-[32px] bg-[#062943] px-7 py-12 text-center shadow-[0_25px_70px_rgba(6,41,67,.18)] md:px-12">

            <p className="text-xs font-black tracking-[.18em] text-cyan-300">
              EVOLUCIÓN TELEFÓNICA
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black text-white md:text-4xl">
              Soluciones de conectividad y tecnología para tu negocio.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Conoce nuestras opciones de eSIM, tiempo aire por mayoreo,
              SIM física, portabilidad y software comercial para punto de venta.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <Link
                to="/soluciones"
                className="btn-primary"
              >
                Ver soluciones
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/contacto#formulario"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:bg-white/15"
              >
                Contactarnos
                <ArrowRight
                  size={16}
                  className={ICON_COLOR}
                />
              </Link>

            </div>

          </div>

        </div>
      </section>

    </div>
  )
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}) {
  return (
    <div
      className={
        center
          ? 'mx-auto max-w-3xl text-center'
          : 'max-w-3xl'
      }
    >
      <p className="eyebrow">
        {eyebrow}
      </p>

      <h2 className="title mt-2">
        {title}
      </h2>

      {text && (
        <p className="copy mt-4">
          {text}
        </p>
      )}
    </div>
  )
}