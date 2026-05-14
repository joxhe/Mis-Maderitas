"use client"
import { useState, useEffect } from "react"
import { Search, ShoppingCart, TreePine, X, Menu } from "lucide-react"

const navLinks = [
  { label: "Inicio",      id: "inicio" },
  { label: "Historia",    id: "historia" },
  { label: "Colecciones", id: "catalogo" },
  { label: "Catálogo",    id: "catalogo-completo" },
]

export default function Navbar() {
  const [busquedaAbierta, setBusquedaAbierta] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [query, setQuery] = useState("")
  const [activeId, setActiveId] = useState("inicio")

  // Detectar sección activa con IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: "-40% 0px -55% 0px" }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setMenuAbierto(false)
    setBusquedaAbierta(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 text-green-800 font-semibold text-lg">
            <TreePine size={20} />
            <span>MIS MADERITAS</span>
          </div>

          {/* Links desktop — se ocultan cuando búsqueda está abierta */}
          {!busquedaAbierta && (
            <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => handleScroll(id)}
                  className="relative pb-1 transition-colors hover:text-green-800"
                >
                  <span className={activeId === id ? "text-green-800" : ""}>
                    {label}
                  </span>
                  {/* Rayita animada */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-green-800 transition-all duration-300 ${
                      activeId === id ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              ))}
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

          {/* Iconos */}
          <div className="flex items-center gap-4 text-gray-600">
            <button
              onClick={() => { setBusquedaAbierta(!busquedaAbierta); setQuery(""); setMenuAbierto(false) }}
              className="hover:text-green-800 transition-colors"
            >
              {busquedaAbierta ? <X size={18} /> : <Search size={18} />}
            </button>
            <button className="hover:text-green-800 transition-colors">
              <ShoppingCart size={18} />
            </button>
            {/* Hamburguesa — solo en móvil */}
            <button
              className="md:hidden hover:text-green-800 transition-colors"
              onClick={() => { setMenuAbierto(!menuAbierto); setBusquedaAbierta(false) }}
            >
              {menuAbierto ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Menú móvil desplegable */}
      <div
        style={{ top: "65px" }}
        className={`fixed left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-md transition-all duration-300 md:hidden overflow-hidden ${
          menuAbierto ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`text-left py-3 text-sm border-b border-gray-50 last:border-0 transition-colors flex items-center gap-2 ${
                activeId === id
                  ? "text-green-800 font-semibold"
                  : "text-gray-600 hover:text-green-800"
              }`}
            >
              {/* Rayita lateral en móvil */}
              <span
                className={`inline-block w-1 h-4 rounded-full transition-all duration-300 ${
                  activeId === id ? "bg-green-800" : "bg-transparent"
                }`}
              />
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}