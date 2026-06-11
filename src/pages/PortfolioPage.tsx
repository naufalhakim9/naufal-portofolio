import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailModal from '../components/ProjectDetailModal';

const PortfolioPage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [tool, setTool] = useState('All');
  const { slug } = useParams();
  const navigate = useNavigate();

  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((project) => project.category)))], []);
  const tools = useMemo(() => ['All', ...Array.from(new Set(projects.flatMap((project) => project.tags))).sort()], []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = category === 'All' || project.category === category;
      const matchesTool = tool === 'All' || project.tags.includes(tool);
      const matchesSearch = [project.title, project.shortDescription, project.description].join(' ').toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesTool && matchesSearch;
    });
  }, [category, search, tool]);

  const selectedProject = useMemo(() => projects.find((project) => project.id === slug), [slug]);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-20 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-accent-400">Portfolio</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-950 dark:text-white">Semua proyek</h1>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">Jelajahi semua proyek yang saya kerjakan, dari dashboard BI hingga pipeline data engineering.</p>
          </div>
        </motion.div>

        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-6">
          <input
            type="search"
            aria-label="Search projects"
            placeholder="Cari project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          />
          <a href="/#projects" className="inline-flex items-center justify-center rounded-3xl bg-primary-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-primary-700">
            Back to Home
          </a>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setCategory(option)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${category === option ? 'border-primary-600 bg-primary-600 text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500'}`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {tools.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setTool(option)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${tool === option ? 'border-primary-600 bg-primary-600 text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500'}`}
            >
              {option}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="rounded-[2rem] border border-slate-200 bg-white p-14 text-center shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">No results found</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">Coba kata kunci lain, kategori, atau tool untuk menemukan project yang lebih relevan.</p>
          </div>
        ) : (
          <div className="grid gap-6 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} detailPath={`/portfolio/${project.id}`} />
            ))}
          </div>
        )}
      </div>

      {selectedProject ? <ProjectDetailModal project={selectedProject} onClose={() => navigate('/portfolio')} /> : null}
    </section>
  );
};

export default PortfolioPage;
