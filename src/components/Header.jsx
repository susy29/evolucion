import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  Store,
  ChevronRight,
  Sparkles
} from 'lucide-react'

import logo from '../images/logo.png'

const nav = [
  ['Inicio', '/'],
  ['¿Quiénes somos?', '/quienes-somos'],
  ['Soluciones', '/soluciones'],
  ['Compañías', '/companias'],
  ['Puntos de Venta', '/puntos-de-venta'],
  ['Soporte', '/soporte'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <header className="sticky top-0 z-50">

        {/* Barra principal */}
        <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">

          <div className="shell flex min-h-[78px] items-center justify-between gap-6">

            {/* LOGO */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="group flex shrink-0 items-center"
            >
              <div className="relative">

                {/* brillo detrás del logo */}
                <div className="absolute -inset-3 rounded-2xl bg-cyan-100/0 blur-xl transition-all duration-300 group-hover:bg-cyan-100/70" />

                <img
                  src={logo}
                  alt="Evolución Telefónica"
                  className="relative h-[58px] w-auto object-contain transition duration-300 group-hover:scale-[1.03]"
                />

              </div>
            </Link>


            {/* NAVEGACIÓN DESKTOP */}
            <nav className="hidden items-center rounded-2xl border border-slate-200/70 bg-slate-50/70 p-1.5 shadow-sm xl:flex">

              {nav.map(([name, path]) => {
                const active = pathname === path

                return (
                  <Link
                    key={path}
                    to={path}
                    className={`
                      group relative flex items-center gap-1.5
                      rounded-xl px-4 py-2.5
                      text-[11px] font-extrabold
                      transition-all duration-200
                      ${
                        active
                          ? 'bg-white text-[#1389b8] shadow-sm'
                          : 'text-[#385268] hover:bg-white hover:text-[#1389b8] hover:shadow-sm'
                      }
                    `}
                  >

                    {name}

                    {active && (
                      <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#45d7df]" />
                    )}

                  </Link>
                )
              })}

            </nav>


            {/* CTA DESKTOP */}
            <Link
              to="/puntos-de-venta"
              className="
                group hidden xl:flex
                items-center gap-2
                rounded-2xl
                bg-[#062943]
                px-5 py-3
                text-[11px] font-black text-white
                shadow-lg shadow-[#062943]/15
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#0b456a]
                hover:shadow-xl
              "
            >

              <span className="
                flex h-7 w-7 items-center justify-center
                rounded-lg bg-white/10
                transition-transform duration-300
                group-hover:scale-110
              ">
                <Store size={15} />
              </span>

              <span>Quiero ser Punto de Venta</span>

              <ChevronRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>


            {/* MENU MOBILE */}
            <button
              onClick={() => setOpen(!open)}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-2xl
                border border-slate-200
                bg-white
                text-[#062943]
                shadow-sm
                transition-all
                hover:border-cyan-200
                hover:bg-cyan-50
                xl:hidden
              "
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              {open ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>

          </div>
        </div>


        {/* Línea decorativa */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#45d7df] to-transparent opacity-70" />


        {/* MENÚ MOBILE */}
        <div
          className={`
            overflow-hidden border-b border-slate-200
            bg-white/95 backdrop-blur-xl
            transition-all duration-300 xl:hidden
            ${
              open
                ? 'max-h-[600px] opacity-100'
                : 'max-h-0 opacity-0'
            }
          `}
        >

          <div className="shell py-5">

            {/* encabezado móvil */}
            <div className="mb-4 flex items-center gap-3 px-1">

              <div className="
                flex h-9 w-9 items-center justify-center
                rounded-xl bg-cyan-50 text-[#1389b8]
              ">
                <Sparkles size={16} />
              </div>

              <div>
                <p className="text-xs font-black text-[#062943]">
                  Evolución Telefónica
                </p>

                <p className="text-[10px] font-medium text-slate-500">
                  Soluciones de telefonía
                </p>
              </div>

            </div>


            {/* enlaces */}
            <div className="grid gap-1.5">

              {nav.map(([name, path]) => {
                const active = pathname === path

                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setOpen(false)}
                    className={`
                      flex items-center justify-between
                      rounded-2xl px-4 py-3.5
                      text-sm font-bold
                      transition-all duration-200
                      ${
                        active
                          ? 'bg-cyan-50 text-[#1389b8]'
                          : 'text-[#385268] hover:bg-slate-50 hover:text-[#1389b8]'
                      }
                    `}
                  >

                    <span>{name}</span>

                    <ChevronRight
                      size={17}
                      className={`
                        transition-transform
                        ${active ? 'translate-x-0.5' : 'text-slate-300'}
                      `}
                    />

                  </Link>
                )
              })}

            </div>


            {/* CTA MOBILE */}
            <Link
              to="/puntos-de-venta"
              onClick={() => setOpen(false)}
              className="
                group mt-4 flex items-center justify-between
                rounded-2xl
                bg-[#062943]
                px-4 py-4
                text-white
                shadow-lg
              "
            >

              <div className="flex items-center gap-3">

                <div className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl bg-white/10
                ">
                  <Store size={18} />
                </div>

                <div>
                  <p className="text-xs font-black">
                    Quiero ser Punto de Venta
                  </p>

                  <p className="mt-0.5 text-[10px] text-white/60">
                    Conoce cómo formar parte
                  </p>
                </div>

              </div>

              <ChevronRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />

            </Link>

          </div>
        </div>

      </header>
    </>
  )
}