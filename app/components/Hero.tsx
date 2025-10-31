import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          SERGIO ALEJANDRO
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">TENJO MORALES</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-muted-foreground mb-8 font-medium">
          MARKETING – SEGUNDO SEMESTRE
        </p>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 italic text-pretty">
          "El éxito no llega por casualidad, sino por esfuerzo, aprendizaje y pasión."
        </p>
        <Link href="#perfil">
          <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90">
            <span className="relative z-10">Conóceme</span>
            <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
