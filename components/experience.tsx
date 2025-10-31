import { Calendar, Briefcase } from "lucide-react"

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Experiencia Laboral</h2>

        <div className="max-w-3xl mx-auto">
          {/* Timeline card */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

            {/* Experience card */}
            <div className="relative pl-20 pb-12">
              {/* Timeline dot */}
              <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />

              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">AIRAM RT</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>01 de diciembre 2023 – 30 de diciembre 2023</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Experiencia laboral en un almacén de ropa, donde mis responsabilidades incluían atender a los
                  clientes, cerrar ventas de manera efectiva y el cuidado de la mercancía.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Atención al cliente
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Ventas</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Responsabilidad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
