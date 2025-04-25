import Link from "next/link";
export default function MainNav (){
  
    return (
      <header className="bg-foreground text-background w-full fixed top-0 left-0 right-0 z-50 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-accent transition-colors"
          >
            My Portfolio
          </Link>
          <ul className="flex gap-6 text-sm font-semibold uppercase tracking-wide">
            <li>
              <Link
                href="/aboutme"
                className="hover:text-accent transition-colors"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-accent transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/aboutme/contact"
                className="hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}