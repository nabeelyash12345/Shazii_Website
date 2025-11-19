
export function TeamCard({ name, position, description, avatar, rating = 5 }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      {/* Avatar and Info */}
     <div className="bg-white rounded-full shadow-lg  max-w-sm ">
  <div className="flex items-center gap-4 mb-4">
    <img
      src={avatar || "/placeholder.svg"}
      alt={name}
      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
    />
    <div className="flex-1">
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500">{position}</p>
      {/* Star Rating */}
      <div className="flex gap-1 mt-1">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>
    </div>
  </div>
</div>
      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
