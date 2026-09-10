import { Link } from 'react-router-dom'

export default function HeroSection({ title, subtitle, cta, ctaLink, bgImage, align = 'left' }) {
  return (
    <div
      className="hero-section relative overflow-hidden"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      {bgImage && <div className="absolute inset-0 bg-black/40"></div>}

      <div className="section-container relative z-10">
        <div className={`flex flex-col ${align === 'right' ? 'md:items-end' : 'md:items-start'} gap-6`}>
          <div className={`max-w-2xl ${align === 'right' ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
            <p className="text-xl text-gray-100 mb-6">{subtitle}</p>
            {cta && ctaLink && (
              <Link to={ctaLink} className="btn-primary inline-block">
                {cta}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
