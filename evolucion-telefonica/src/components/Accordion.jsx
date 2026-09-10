import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b-2 border-gray-200 last:border-b-0"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
          >
            <span className="font-semibold text-primary-900 pr-4">{item.question}</span>
            <ChevronDown
              size={20}
              className={`text-accent-500 flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="pb-4 text-gray-600">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
