import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  detailPath?: string;
}

const ProjectCard = ({ project, detailPath }: ProjectCardProps) => {
  const actionLabel = detailPath ? 'View Details' : project.githubUrl ? 'View Project' : 'View Details';
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article whileHover={{ y: -4 }} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:border-primary-500/30 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5 h-52 overflow-hidden rounded-2xl bg-slate-100 text-slate-500 dark:bg-slate-800">
        {project.thumbnail && !imageFailed ? (
          <img src={project.thumbnail} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.2em] text-slate-400">No Image</div>
        )}
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-primary-600 dark:text-accent-400">{project.category}</p>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        </div>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{project.completedAt}</span>
          {detailPath ? (
            <Link to={detailPath} className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-accent-400">
              {actionLabel}
              <ArrowUpRight size={16} />
            </Link>
          ) : project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-accent-400">
              {actionLabel}
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-400 dark:text-slate-500">
              {actionLabel}
              <ArrowUpRight size={16} />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
