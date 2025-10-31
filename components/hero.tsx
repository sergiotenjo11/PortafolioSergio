import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32"
    >
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          SERGIO ALEJANDRO
          <br />
          TENJO MORALES
        </h1>
        <p className="mx-auto max-w-[42rem] text-xl font-semibold text-primary sm:text-2xl">
          MARKETING – SEGUNDO SEMESTRE
        </p>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8 italic">
          "El éxito no llega por casualidad, sino por esfuerzo, aprendizaje y pasión."
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="#perfil">
          <Button size="lg">
            Conóceme
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
