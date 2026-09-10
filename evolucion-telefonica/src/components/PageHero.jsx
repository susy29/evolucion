import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, text, image, cta = 'Conocer más', ctaLink = '/contacto', dark = false }) {
  return (
    <section className={`relative overflow-hidden ${dark ? 'bg-[#082a47] text-white' : 'bg-gradient-to-r from-slate-50 via-white to-cyan-50'}`}>
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="section-container relative grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10">
          <p className={`eyebrow ${dark ? 'text-cyan-300' : ''}`}>{eyebrow}</p>
          <h1 className={`max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl ${dark ? 'text-white' : 'text-primary-900'}`}>{title}</h1>
          <p className={`mt-6 max-w-2xl text-lg leading-8 ${dark ? 'text-slate-200' : 'text-slate-600'}`}>{text}</p>
          <Link to={ctaLink} className="btn-primary mt-8">{cta} <ArrowRight size={17}/></Link>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/20 md:min-h-[420px]">
          <img src={image} alt="Evolución Telefónica" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
