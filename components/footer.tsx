import Link from "next/link"
import { Phone, Mail, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">Sergio Alejandro Tenjo Morales</h2>
          <p className="text-sm text-muted-foreground">Estudiante de Marketing | Segundo Semestre</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Navegación</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#perfil" className="text-muted-foreground transition-colors hover:text-primary">
                  Perfil
                </Link>
              </li>
              <li>
                <Link href="#habilidades" className="text-muted-foreground transition-colors hover:text-primary">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="#experiencia" className="text-muted-foreground transition-colors hover:text-primary">
                  Experiencia
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="tel:3203447720" className="text-muted-foreground transition-colors hover:text-primary">
                  Teléfono
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:stenjo@uniempresarial.edu.co"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Email
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Redes</h3>
            <div className="flex space-x-4">
              <Link href="tel:3203447720" className="text-muted-foreground transition-colors hover:text-primary">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Teléfono</span>
              </Link>
              <Link
                href="mailto:stenjo@uniempresarial.edu.co"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sergio Alejandro Tenjo Morales. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
