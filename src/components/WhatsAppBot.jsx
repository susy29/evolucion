import { useState } from 'react'
import {
  MessageCircle,
  X,
  ArrowUpRight,
  Bot,
  Smartphone,
  RefreshCw,
  Zap,
  Headphones,
} from 'lucide-react'

export default function WhatsAppBot() {
  const [open, setOpen] = useState(false)

  // WhatsApp del asistente
  const whatsappNumber = '5219514351322'

  const openWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message)

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const options = [
    {
      icon: Zap,
      title: 'Activaciones',
      text: 'Ayuda con una activación',
      message:
        'Hola, necesito ayuda con una activación de chip de Evolución Telefónica.',
    },
  ]

  return (
    <>
      {/* =====================================================
          BOTÓN FLOTANTE
      ===================================================== */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Cerrar asistente de WhatsApp' : 'Abrir asistente de WhatsApp'}
        className="fixed bottom-5 right-5 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_35px_rgba(37,211,102,.35)] transition duration-300 hover:scale-110 hover:bg-[#20bd5a] md:bottom-7 md:right-7"
      >
        {open ? (
          <X size={27} />
        ) : (
          <MessageCircle size={30} />
        )}

        {/* Indicador */}
        {!open && (
          <span className="absolute right-1 top-1 h-4 w-4 rounded-full border-2 border-white bg-[#ffad1f]" />
        )}
      </button>

      {/* =====================================================
          PANEL DEL BOT
      ===================================================== */}
      {open && (
        <div className="fixed bottom-24 right-5 z-[9998] w-[calc(100vw-40px)] max-w-[380px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(6,41,67,.22)] md:bottom-28 md:right-7">

          {/* =================================================
              HEADER
          ================================================= */}
          <div className="relative overflow-hidden bg-[#062943] px-5 py-5 text-white">

            {/* Decoración */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#45d7df]/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-[#ffad1f]/10 blur-2xl" />

            <div className="relative flex items-center gap-3">

              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg">
                <Bot size={24} />

                <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-[#062943] bg-[#45d7df]" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-black">
                  Asistente Evolución
                </p>

                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#45d7df]" />

                  <p className="text-[10px] font-semibold text-slate-300">
                    Disponible para ayudarte
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
              >
                <X size={18} />
              </button>

            </div>
          </div>

          {/* =================================================
              CONTENIDO
          ================================================= */}
          <div className="max-h-[70vh] overflow-y-auto p-5">

            <div className="rounded-2xl bg-[#f5f8fb] p-4">
              <p className="text-sm font-bold text-[#17324a]">
                ¡Hola! 👋
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Soy el asistente de Evolución Telefónica.
              </p>
            </div>

            {/* =================================================
                OPCIONES
            ================================================= */}
            <div className="mt-4 space-y-2.5">

              {options.map((option) => {
                const Icon = option.icon

                return (
                  <button
                    key={option.title}
                    type="button"
                    onClick={() => openWhatsApp(option.message)}
                    className="group flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#45d7df] hover:bg-[#f7fdfe] hover:shadow-[0_8px_25px_rgba(19,137,184,.10)]"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#45d7df]/15 text-[#1389b8] transition group-hover:bg-[#1389b8] group-hover:text-white">
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-black text-[#17324a]">
                        {option.title}
                      </p>

                      <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                        {option.text}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-[#1389b8]"
                    />

                  </button>
                )
              })}

            </div>

            {/* =================================================
                WHATSAPP DIRECTO
            ================================================= */}
            <div className="mt-5 border-t border-slate-100 pt-5">

              <p className="mb-2 text-center text-[10px] font-bold text-slate-400">
                ¿Prefieres escribir directamente?
              </p>

              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    'Hola, necesito información sobre Evolución Telefónica.'
                  )
                }
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-xs font-black text-white shadow-[0_10px_25px_rgba(37,211,102,.20)] transition duration-300 hover:-translate-y-1 hover:bg-[#20bd5a]"
              >
                <MessageCircle size={17} />
                Abrir conversación en WhatsApp
                <ArrowUpRight size={15} />
              </button>

              <p className="mt-3 text-center text-[9px] text-slate-400">
                +52 1 951 435 1322
              </p>

            </div>

          </div>
        </div>
      )}
    </>
  )
}