import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Categories from "@/components/Categories"
import Collection from "@/components/Collection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="inicio"><Hero /></section>
      <section id="catalogo"><Categories /></section>
      <section id="coleccion"><Collection /></section>
      <Footer />
    </main>
  )
}