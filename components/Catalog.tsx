"use client"
import Image from "next/image"
import { useState } from "react"

const products = [
  { id: 1,  name: "Huevera Artesanal",          price: "$38.000" },
  { id: 2,  name: "Soportes Decorativos",        price: "$45.000" },
  { id: 3,  name: "Soporte para Tablet",         price: "$52.000" },
  { id: 4,  name: "Tabla de Cortar con Corcho",  price: "$55.000" },
  { id: 5,  name: "Set Tablas y Quesos",         price: "$78.000" },
  { id: 6,  name: "Comedero para Mascotas",      price: "$48.000" },
  { id: 7,  name: "Porta Velas Tronco",          price: "$35.000" },
  { id: 8,  name: "Mueble Organizador Infantil", price: "$185.000" },
  { id: 9,  name: "Set Mesas y Sillas Escolar",  price: "$320.000" },
  { id: 10, name: "Tabla de Picar Rústica",      price: "$42.000" },
  { id: 11, name: "Revistero Infantil",          price: "$95.000" },
  { id: 12, name: "Set Jardín Infantil",         price: "$280.000" },
]

export default function Catalog() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-20 px-8 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs text-green-800 uppercase tracking-widest font-medium">
            Colección completa
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Catálogo</h2>
          <p className="text-gray-500 mt-2 max-w-md">
            Cada pieza, hecha a mano con madera recuperada. Única, sostenible y con carácter propio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image container */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#ede8e1]">
                <Image
                  src={`/images/${product.id}.jpeg`}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Overlay on hover */}
                <div
                  className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                    hovered === product.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/* Info */}
              <div className="mt-3 px-1">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {product.name}
                </p>
                <p className="text-sm text-green-800 font-semibold mt-0.5">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}