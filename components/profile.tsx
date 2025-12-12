import { TrendingUp } from "lucide-react"

export default function Profile() {
  return (
    <section id="perfil" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Perfil Profesional</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column: Profile image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <img
                  src="/SegyT.jpeg"
                  alt="Sergio Alejandro Tenjo Morales"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right column: Profile text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy estudiante de marketing con experiencia en ventas, lo que me ha permitido desarrollar habilidades en
              atención al cliente y negociación.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Destaco por mi motivación, proactividad y grandes expectativas en mi desarrollo profesional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mi enfoque está en aplicar conocimientos prácticos para contribuir al éxito de proyectos y alcanzar metas.
            </p>

            {/* Timeline indicator */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">En crecimiento profesional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
