"use client"
import { useState } from "react"

const products = [
  {
    name: "Porta Vasos",
    description: "Madera sólida de roble recuperado",
    price: "$24.000",
    image: "https://ambientegourmet.vtexassets.com/arquivos/ids/247258/28011-6-CARA-3.jpg?v=638978908185330000",
  },
  {
    name: "Soporte de Celular",
    description: "Diseño ergonómico y minimalista",
    price: "$38.000",
    image: "https://trazosdearte.com/wp-content/uploads/2023/06/Soporte-para-Celular-de-madera-MDF-de-18-mm.webp",
  },
  {
    name: "Platos",
    description: "Curados con aceites naturales",
    price: "$52.000",
    image: "https://img.kwcdn.com/product/fancy/5ca51591-e37f-4894-9c6e-a9af099a9229.jpg?imageView2/2/w/800/q/70/format/avif",
  },
  {
    name: "Porta Cubiertos",
    description: "Organización rústica y funcional",
    price: "$45.000",
    image: "https://www.ikea.com/co/es/images/products/uppdatera-bandeja-para-cubiertos-bambu-claro__0968831_pe810559_s5.jpg?f=s",
  },
]

const colores = [
  { nombre: "Natural", hex: "#D4B896" },
  { nombre: "Medio", hex: "#8B5E3C" },
  { nombre: "Oscuro", hex: "#3E2009" },
]

const tamaños = ["Pequeño", "Mediano", "Grande"]
const diseños = ["Clásico", "Moderno", "Rústico"]

function ProductCard({ product }: { product: typeof products[0] }) {
  const [colorSeleccionado, setColorSeleccionado] = useState(colores[0].nombre)
  const [tamañoSeleccionado, setTamañoSeleccionado] = useState("")
  const [diseñoAbierto, setDiseñoAbierto] = useState(false)
  const [diseñoSeleccionado, setDiseñoSeleccionado] = useState("Elegir diseño")

  return (
    <div className="group cursor-pointer">
      {/* Imagen */}
      <div className="h-64 rounded-xl overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <p className="text-xs text-gray-400 uppercase tracking-widest">{product.name}</p>
      <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      <p className="text-green-800 font-semibold mt-2 mb-3">{product.price}</p>

      {/* Elegir diseño */}
      <div className="relative mb-3">
        <button
          onClick={() => setDiseñoAbierto(!diseñoAbierto)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-left flex justify-between items-center hover:border-green-800 transition-colors"
        >
          <span>{diseñoSeleccionado}</span>
          <span>{diseñoAbierto ? "▲" : "▼"}</span>
        </button>
        {diseñoAbierto && (
          <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-1 shadow-md">
            {diseños.map((d) => (
              <button
                key={d}
                onClick={() => { setDiseñoSeleccionado(d); setDiseñoAbierto(false) }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
              >
                {d}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Color de madera */}
      <div className="mb-3">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Color de madera</p>
        <div className="flex gap-2">
          {colores.map((color) => (
            <button
              key={color.nombre}
              onClick={() => setColorSeleccionado(color.nombre)}
              title={color.nombre}
              className={`w-7 h-7 rounded-full border-2 transition-all ${
                colorSeleccionado === color.nombre ? "border-green-800 scale-110" : "border-transparent"
              }`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>

      {/* Tamaño */}
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Tamaño</p>
        <div className="flex gap-2">
          {tamaños.map((t) => (
            <button
              key={t}
              onClick={() => setTamañoSeleccionado(t)}
              className={`px-3 py-1 text-xs rounded-md border transition-colors ${
                tamañoSeleccionado === t
                  ? "border-green-800 text-green-800 bg-green-50"
                  : "border-gray-300 text-gray-600 hover:border-green-800"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Collection() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Colección Artesanal</h2>
          <p className="text-gray-500 mt-3">
            Cada pieza es fabricada a mano, respetando la veta y el carácter de la madera.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}