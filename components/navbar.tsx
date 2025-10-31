import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Sergio Tenjo</span>
        </Link>
        <nav className="flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          <Link href="#inicio" className="transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link href="#perfil" className="transition-colors hover:text-primary">
            Perfil
          </Link>
          <Link href="#habilidades" className="transition-colors hover:text-primary">
            Habilidades
          </Link>
          <Link href="#experiencia" className="transition-colors hover:text-primary">
            Experiencia
          </Link>
          <Link href="#contacto" className="transition-colors hover:text-primary">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}
