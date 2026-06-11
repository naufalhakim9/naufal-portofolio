import { socialLinks } from '../data/socialLinks';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">© 2025 Naufal Hakim. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#home" className="hover:text-slate-900 dark:hover:text-white">
            Home
          </a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="text-sm hover:text-slate-900 dark:hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
