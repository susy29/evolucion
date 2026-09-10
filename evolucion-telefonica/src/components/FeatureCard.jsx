export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="feature-card text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-900 to-primary-800 rounded-full mb-4">
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold text-primary-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
