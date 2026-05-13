export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="max-w-6xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <div className="flex flex-col gap-6">
          <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full w-fit">
            ARTESANÍA SOSTENIBLE
          </span>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Muebles y accesorios con alma de madera renovada.
          </h1>
          <p className="text-gray-500 text-lg">
            Transformamos residuos industriales en piezas únicas que aportan calidez y diseño consciente a tu hogar.
          </p>
          <div className="flex gap-4 mt-2">
            <button className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-900 transition-colors">
              Ver Catálogo
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:border-green-800 hover:text-green-800 transition-colors">
              Nuestra Historia
            </button>
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full h-[500px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800"
            alt="Madera renovada"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}