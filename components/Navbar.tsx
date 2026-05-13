"use client"
import { useState } from "react"
import { Search, ShoppingCart, TreePine, X } from "lucide-react"

export default function Navbar() {
  const [busquedaAbierta, setBusquedaAbierta] = useState(false)
  const [query, setQuery] = useState("")

  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 text-green-800 font-semibold text-lg">
          <TreePine size={20} />
          <span>MIS MADERITAS</span>
        </div>

        {/* Links — se ocultan cuando la búsqueda está abierta */}
        {!busquedaAbierta && (
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <button onClick={() => handleScroll("inicio")} className="text-green-800 border-b-2 border-green-800 pb-1">Inicio</button>
            <button onClick={() => handleScroll("catalogo")} className="hover:text-green-800 transition-colors">Catálogo</button>
            <button onClick={() => handleScroll("coleccion")} className="hover:text-green-800 transition-colors">Proceso</button>
            <button onClick={() => handleScroll("suscripcion")} className="hover:text-green-800 transition-colors">Materiales</button>
          </div>
        )}

        {/* Barra de búsqueda expandible */}
        {busquedaAbierta && (
          <div className="flex-1 mx-8">
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full border-b-2 border-green-800 outline-none py-1 text-sm text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>
        )}

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-600">
          <button
            onClick={() => { setBusquedaAbierta(!busquedaAbierta); setQuery("") }}
            className="hover:text-green-800 transition-colors"
          >
            {busquedaAbierta ? <X size={18} /> : <Search size={18} />}
          </button>
          <button className="hover:text-green-800 transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>

      </div>
    </nav>
  )
}