import Link from "next/link"
import { Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SERGIO TENJO
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Estudiante de Marketing comprometido con el crecimiento profesional y la excelencia.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#perfil" className="text-muted-foreground hover:text-foreground transition-colors">
                  Perfil
                </Link>
              </li>
              <li>
                <Link href="#habilidades" className="text-muted-foreground hover:text-foreground transition-colors">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="#experiencia" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experiencia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="flex flex-col space-y-3">
              <Link
                href="tel:3203447720"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>3203447720</span>
              </Link>
              <Link
                href="mailto:stenjo@uniempresarial.edu.co"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">stenjo@uniempresarial.edu.co</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 Sergio Alejandro Tenjo Morales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
