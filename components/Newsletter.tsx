export default function Newsletter() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto bg-[#4a6741] rounded-2xl px-8 py-16 text-center text-white relative overflow-hidden">
        
        {/* Icono decorativo de fondo */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 text-[200px]">
          🌲
        </div>

        <h2 className="text-4xl font-bold mb-4">Únete a nuestra comunidad</h2>
        <p className="text-white/80 max-w-lg mx-auto mb-8">
          Suscríbete para recibir lanzamientos exclusivos, historias sobre nuestros artesanos y
          consejos de cuidado para tus piezas de madera.
        </p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="flex-1 px-5 py-3 rounded-lg text-gray-800 bg-white/90 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Suscribirse
          </button>
        </div>

        <p className="text-white/50 text-xs mt-4">
          Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
        </p>

      </div>
    </section>
  )
}