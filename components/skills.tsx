import { Lightbulb, Users, CheckCircle, FileText } from "lucide-react"

const skills = [
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "Responsable",
    description: "Compromiso con la excelencia y cumplimiento de objetivos.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Creativo",
    description: "Capacidad para generar ideas innovadoras y soluciones efectivas.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Trabajo en equipo",
    description: "Habilidad para colaborar y contribuir al éxito colectivo.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Herramientas ofimáticas",
    description: "Manejo de Word y Canva para crear contenido profesional.",
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Habilidades</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Técnicas y Blandas</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card border border-border p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{skill.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
