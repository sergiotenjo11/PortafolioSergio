import { Phone, Mail, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Contacto</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">¿Interesado en colaborar? Contáctame</p>

        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <Link
            href="tel:3203447720"
            className="flex flex-col items-center p-6 bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
            <p className="text-muted-foreground text-center">3203447720</p>
          </Link>

          {/* Email */}
          <Link
            href="mailto:stenjo@uniempresarial.edu.co"
            className="flex flex-col items-center p-6 bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Correo</h3>
            <p className="text-muted-foreground text-center break-all">stenjo@uniempresarial.edu.co</p>
          </Link>

          {/* LinkedIn */}
          <Link
            href="#"
            className="flex flex-col items-center p-6 bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground text-center">Perfil profesional</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
