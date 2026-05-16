import Navbar from "@/components/Navbar"
import Catalog from "@/components/Catalog"
import Footer from "@/components/Footer"

export default function CatalogoPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Catalog />
      </div>
      <Footer />
    </main>
  )
}