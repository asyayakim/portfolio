import Link from "next/link";
export default function MainNav (){
  
    return (
      <header className="bg-foreground text-background w-full fixed top-0 left-0 right-0 z-50 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between font-sans">
          <Link
            href="/"
            className="text-2xl text-purple-300 font-bold hover:text-purple-700 transition-colors"
          >
            Portfolio
          </Link>
          <ul className="flex gap-6 text-sm font-semibold uppercase tracking-wide">
            <li>
              <Link
                href="/aboutme"
                className="hover:text-purple-700 transition-colors"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-700 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/aboutme/contact"
                className="hover:text-purple-700 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/pixelart"
                className="hover:text-purple-700  transition-colors"
              >
                Pixel Art
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}