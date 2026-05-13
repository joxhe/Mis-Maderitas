export default function Categories() {
  const categories = [
    {
      title: "Mobiliario de Autor",
      description: "Estanterías, mesas y sillas únicas.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
    },
    {
      title: "Detalles Únicos",
      description: "Piezas pequeñas con gran carácter.",
      image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800",
    },
    {
      title: "Ambientes Calmos",
      description: "Crea espacios con calidez natural.",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800",
    },
  ]

  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">{cat.title}</h3>
                <p className="text-sm text-white/80 mt-1">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}