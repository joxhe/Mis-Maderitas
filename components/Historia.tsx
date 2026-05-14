export default function Historia() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div className="flex flex-col gap-6">
          <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full w-fit">
            NUESTRA HISTORIA
          </span>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Una historia de madera, amor y propósito.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Mis Maderitas nace a partir de la transformación de residuos de madera en objetos útiles, decorativos y con valor emocional. La marca surge desde la idea de demostrar que los materiales que muchas veces son considerados desechos aún pueden tener una segunda vida a través del diseño, la creatividad y la sostenibilidad.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            Inspirada en el aprovechamiento consciente de los recursos, Mis Maderitas busca reducir el desperdicio generado por talleres y procesos productivos de carpintería, reutilizando retazos y sobrantes de madera para convertirlos en productos únicos con identidad artesanal. Cada pieza conserva las vetas, texturas e imperfecciones naturales del material, resaltando la belleza auténtica de la madera recuperada.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            La marca combina diseño, funcionalidad y responsabilidad ambiental, promoviendo una cultura de consumo más consciente y sostenible. Más allá de crear productos, Mis Maderitas transmite el valor de reutilizar, transformar y resignificar los materiales, entendiendo que aquello que parece un residuo puede convertirse en una oportunidad de diseño e innovación.
          </p>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:border-green-800 hover:text-green-800 transition-colors w-fit">
            Conocer más
          </button>
        </div>

        {/* Imagen */}
        <div className="w-full h-105 rounded-2xl overflow-hidden">
          <img
            src="/images/cecar.png"
            alt="Nuestra historia - Mis Maderitas"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}