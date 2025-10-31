import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="#inicio"
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              SERGIO TENJO
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <Link href="#inicio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
                <Link href="#perfil" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Perfil
                </Link>
                <Link
                  href="#habilidades"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Habilidades
                </Link>
                <Link
                  href="#experiencia"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Experiencia
                </Link>
                <Link
                  href="#contacto"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
