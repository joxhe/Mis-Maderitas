import { Share2, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo y copyright */}
        <div>
          <p className="font-bold text-gray-900 text-sm">MIS MADERITAS</p>
          <p className="text-gray-400 text-xs mt-1">© 2026 MIS MADERITAS - Belleza renovada.</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-green-800 transition-colors">Catálogo</a>
          <a href="#" className="hover:text-green-800 transition-colors">Proceso</a>
          <a href="#" className="hover:text-green-800 transition-colors">Materiales</a>
          <a href="#" className="hover:text-green-800 transition-colors border-b border-gray-400">Suscripción</a>
        </div>

        {/* Iconos */}
        <div className="flex items-center gap-4 text-gray-500">
          <button className="hover:text-green-800 transition-colors">
            <Share2 size={18} />
          </button>
          <button className="hover:text-green-800 transition-colors">
            <Mail size={18} />
          </button>
          <button className="hover:text-green-800 transition-colors">
            <MapPin size={18} />
          </button>
        </div>

      </div>
    </footer>
  )
}