"use client"
import { Share2, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-white border-t border-gray-100 px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo y copyright */}
        <div>
          <p className="font-bold text-gray-900 text-sm">MIS MADERITAS</p>
          <p className="text-gray-400 text-xs mt-1">© 2026 MIS MADERITAS — Madera renovada.</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <button onClick={() => handleScroll("inicio")}          className="hover:text-green-800 transition-colors">Inicio</button>
          <button onClick={() => handleScroll("historia")}        className="hover:text-green-800 transition-colors">Historia</button>
          <button onClick={() => handleScroll("catalogo")}        className="hover:text-green-800 transition-colors">Colecciones</button>
          <button onClick={() => handleScroll("catalogo-completo")} className="hover:text-green-800 transition-colors">Catálogo</button>
        </div>

        {/* Iconos */}
        <div className="flex items-center gap-4 text-gray-500">
          <button className="hover:text-green-800 transition-colors"><Share2 size={18} /></button>
          <button className="hover:text-green-800 transition-colors"><Mail size={18} /></button>
          <button className="hover:text-green-800 transition-colors"><MapPin size={18} /></button>
        </div>

      </div>
    </footer>
  )
}