import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function VisualHero({
  eyebrow,
  title,
  text,
  src,
  primary = 'Conocer más',
  primaryLink = '/contacto',
  secondary,
  secondaryLink,
  dark = true,
}) {
  return (
    <section
      className={`relative min-h-[430px] overflow-hidden ${
        dark ? 'bg-[#082a47]' : 'bg-white'
      }`}
    >
      {/* =========================================================
          IMAGEN DE FONDO
      ========================================================= */}
      <div className="absolute inset-0">
        {src && (
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        )}

        {/* CAPA PARA DAR CONTRASTE AL TEXTO */}
        <div
          className={
            dark
              ? 'absolute inset-0 bg-gradient-to-r from-[#061d32] via-[#082a47]/80 to-[#082a47]/10'
              : 'absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/15'
          }
        />
      </div>

      {/* =========================================================
          CONTENIDO
      ========================================================= */}
      <div className="shell relative z-10 flex min-h-[430px] items-center py-14">
        <div className="max-w-2xl">
          {/* EYEBROW */}
          <p
            className={`eyebrow ${
              dark ? 'text-cyan-300' : ''
            }`}
          >
            {eyebrow}
          </p>

          {/* TÍTULO */}
          <h1
            className={`mt-3 text-5xl font-black leading-[1.06] tracking-tight md:text-6xl ${
              dark ? 'text-white' : 'text-[#17324a]'
            }`}
          >
            {title}
          </h1>

          {/* TEXTO */}
          <p
            className={`mt-5 max-w-xl text-base leading-7 md:text-lg ${
              dark ? 'text-slate-200' : 'text-slate-600'
            }`}
          >
            {text}
          </p>

          {/* BOTONES */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to={primaryLink}
              className="btn-primary"
            >
              {primary}
              <ArrowRight size={16} />
            </Link>

            {secondary && (
              <Link
                to={secondaryLink}
                className={
                  dark
                    ? 'btn-secondary border-white/50 bg-white/5 text-white'
                    : 'btn-secondary'
                }
              >
                {secondary}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}