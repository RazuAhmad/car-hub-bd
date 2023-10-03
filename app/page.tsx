import { Hero } from '@/components'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}
