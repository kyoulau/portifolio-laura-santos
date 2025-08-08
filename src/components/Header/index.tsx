import { Home, User, Briefcase, Mail } from 'lucide-react';
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/60 backdrop-blur-sm shadow-lg font-inter rounded-3xl">
      <nav className="container mx-auto px-6 py-4 flex justify-center items-center">
        <div className="bg-neutral-800 p-2 rounded-full shadow-inner flex items-center space-x-6">

          <a
            href="/"
            className="group relative flex items-center justify-center p-3 rounded-full text-neutral-300 hover:text-white hover:bg-neutral-700 transition-all duration-300"
          >
            <Home size={24} />
            <span className="absolute top-full mt-3 px-3 py-1 bg-neutral-700 text-sm text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out invisible group-hover:visible whitespace-nowrap">
              Welcome!
            </span>
          </a>
          <a
            href="/sobre"
            className="group relative flex items-center justify-center p-3 rounded-full text-neutral-300 hover:text-white hover:bg-neutral-700 transition-all duration-300"
          >
            <User size={24} />
            <span className="absolute top-full mt-3 px-3 py-1 bg-neutral-700 text-sm text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out invisible group-hover:visible whitespace-nowrap">
              About me
            </span>
          </a>
          <a
            href="/projetos-bala"
            className="group relative flex items-center justify-center p-3 rounded-full text-neutral-300 hover:text-white hover:bg-neutral-700 transition-all duration-300"
          >
            <Briefcase size={24} />
            <span className="absolute top-full mt-3 px-3 py-1 bg-neutral-700 text-sm text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out invisible group-hover:visible whitespace-nowrap">
              Projects
            </span>
          </a>
          <a
            href="/blog"
            className="group relative flex items-center justify-center p-3 rounded-full text-neutral-300 hover:text-white hover:bg-neutral-700 transition-all duration-300"
          >
            <Mail size={24} />
            <span className="absolute top-full mt-3 px-3 py-1 bg-neutral-700 text-sm text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out invisible group-hover:visible whitespace-nowrap">
              Blogs
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;