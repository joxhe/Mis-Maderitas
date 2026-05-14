import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Historia from "@/components/Historia"
import Categories from "@/components/Categories"
import Collection from "@/components/Collection"
import Catalog from "@/components/Catalog"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="inicio"><Hero /></section>
      <section id="historia"><Historia /></section>
      <section id="catalogo"><Categories /></section>
      <section id="coleccion"><Collection /></section>
      <section id="catalogo-completo"><Catalog /></section>
      <Footer />
    </main>
  )
}