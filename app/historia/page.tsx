import Navbar from "@/components/Navbar"
import Historia from "@/components/Historia"
import Footer from "@/components/Footer"

export default function HistoriaPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Historia />
      </div>
      <Footer />
    </main>
  )
}