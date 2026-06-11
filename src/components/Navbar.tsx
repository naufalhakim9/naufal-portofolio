import { useEffect, useState } from 'react';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { siteMetadata } from '../data/siteMetadata';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.25 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${isScrolled ? 'border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm dark:border-slate-800/80 dark:bg-slate-950/95' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
          <img src="/icons/logo.png" alt="Naufal Hakim logo" className="h-16 w-16 object-contain  scale-150" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${activeLink === item.href ? 'text-primary-600 dark:text-accent-400' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <DarkModeToggle theme={theme} setTheme={setTheme} />
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <DarkModeToggle theme={theme} setTheme={setTheme} />
          <button
            type="button"
            aria-label="Toggle mobile menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {openMenu ? (
        <div className="border-t border-slate-200 bg-white/95 px-6 pb-6 pt-4 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800" onClick={() => setOpenMenu(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
