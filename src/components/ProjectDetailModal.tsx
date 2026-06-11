import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        <motion.div
          className="relative w-full max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-950"
          initial={{ y: 30, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 30, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            aria-label="Close project detail"
            className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            onClick={onClose}
          >
            <X size={18} />
          </button>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-100 p-6 dark:bg-slate-900">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-accent-400">{project.category}</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{project.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
              {project.problemStatement ? (
                <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Problem Statement</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.problemStatement}</p>
                </div>
              ) : null}
              {project.solution ? (
                <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Solution</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.solution}</p>
                </div>
              ) : null}
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Project Snapshot</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 space-y-4">
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">Status</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 capitalize">{project.status}</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">Completed</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.completedAt}</p>
                  </div>
                </div>
              </div>
              {project.keyInsights?.length ? (
                <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Key Insights</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {project.keyInsights.map((insight) => (
                      <li key={insight} className="flex items-start gap-3">
                        <span className="mt-1 block h-2 w-2 rounded-full bg-primary-600 dark:bg-accent-400" />
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="grid gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-3xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
                  >
                    GitHub Repo
                    <ArrowUpRight size={16} />
                  </a>
                ) : null}
                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
