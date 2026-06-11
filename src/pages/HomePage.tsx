import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Mail, Sparkles } from 'lucide-react';
import { siteMetadata } from '../data/siteMetadata';
import { socialLinks } from '../data/socialLinks';
import { skills } from '../data/skills';
import { experienceData } from '../data/experience';
import { certifications } from '../data/certifications';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import { withBaseUrl } from '../utils/assetPaths';

const animatedTitles = ['Data Analyst', 'Data Engineer', 'BI Developer'];

const stats = [
  { label: 'Projects', value: '10+' },
  { label: 'Certifications', value: '6' },
  { label: 'Experience', value: 'Fresh Graduate' },
];

const HomePage = () => {
  const [text, setText] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const profileImageUrl = withBaseUrl('icons/naufal.png');

  const isImageIcon = (value: string) => /^\//.test(value) || /^https?:\/\//.test(value) || value.startsWith('data:');

  useEffect(() => {
    const current = animatedTitles[activeIndex];
    let index = 0;
    const interval = setInterval(() => {
      setText(current.slice(0, index + 1));
      if (index === current.length - 1) {
        clearInterval(interval);
        const timeout = setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % animatedTitles.length);
        }, 1800);
        return () => clearTimeout(timeout);
      }
      index += 1;
    }, 80);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const featuredProjects = useMemo(
    () =>
      projects
        .filter((project) => project.featured)
        .sort((a, b) => a.order - b.order)
        .slice(0, 6),
    [],
  );

  return (
    <div className="space-y-24">
      <section id="home" className="relative overflow-hidden px-6 pt-20 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary-100/40 to-transparent dark:from-slate-900/50" />
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 dark:bg-slate-700/80 dark:text-primary-300">
              <Sparkles size={16} />
              Portfolio Personal Brand
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">Halo, saya {siteMetadata.name}.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">{siteMetadata.description} Saya membantu tim mengubah data menjadi keputusan bisnis yang terukur.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/20 transition hover:bg-primary-700">
                View My Work
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto flex h-[480px] w-full max-w-xl items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary-100 via-slate-100 to-white p-6 shadow-glow dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_40%)]" />
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 rounded-[2rem] border border-white/80 bg-white/80 p-8 text-center shadow-2xl backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80">
              <div className="h-40 w-40 overflow-hidden rounded-full shadow-xl">
                <img src={profileImageUrl} alt={siteMetadata.name} className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Data Enthusiast</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{text}</p>
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                {socialLinks.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="rounded-full px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-accent-400">About Me</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Profil singkat</h2>
              <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                Saya seorang Data Analyst dan Data Engineer yang berpengalaman membuat dashboard, analisis data, dan pipeline yang scalable. Saya percaya bahwa data yang tepat harus disajikan dengan cara yang jelas untuk mendukung keputusan
                bisnis.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-slate-50 p-5 text-center dark:bg-slate-800">
                    <p className="text-3xl font-semibold text-slate-950 dark:text-white">{stat.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] bg-slate-50 p-8 dark:bg-slate-800">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Keunggulan saya</p>
              <ul className="mt-6 space-y-4 text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary-600 dark:text-accent-400">•</span>
                  <span>Menjaga kualitas data dan visualisasi yang mudah dipahami.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary-600 dark:text-accent-400">•</span>
                  <span>Menggabungkan analytics, BI, dan engineering untuk solusi end-to-end.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary-600 dark:text-accent-400">•</span>
                  <span>Berkomunikasi dengan tim non-teknis dan menyampaikan insight yang jelas.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-accent-400">Skills</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Kompetensi inti</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">Keterampilan yang sering digunakan dalam proyek analytics, dashboard, dan pipeline data.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-primary-50 text-primary-700 dark:bg-slate-800 dark:text-accent-400">
                  {isImageIcon(skill.icon) ? <img src={skill.icon} alt={skill.name} className="h-8 w-8 object-contain" loading="lazy" /> : <span className="text-sm font-semibold">{skill.icon.substring(0, 1).toUpperCase()}</span>}
                </div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{skill.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{skill.category}</p>
                <p className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-300">{skill.proficiency}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-accent-400">Experience & Education</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Karir dan pendidikan</h2>
          </div>
          <div className="space-y-6">
            {experienceData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-primary-600 dark:text-accent-400">{item.organization}</p>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{item.period}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-accent-400">Certifications</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Sertifikasi profesional</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{cert.title}</p>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">{cert.year}</span>
                </div>
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-accent-400">
                    View Certificate
                  </a>
                ) : (
                  <p className="text-sm text-slate-500 dark:text-slate-400">No verification link</p>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-accent-400">Featured Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Portofolio terbaru</h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              View More Projects
            </Link>
          </div>
          <div className="grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} detailPath={`/portfolio/${project.id}`} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-accent-400">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Mari bicarakan proyek Anda</h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">Kirimkan pesan singkat tentang kebutuhan data Anda, dan saya akan menghubungi secepatnya.</p>
              <div className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <p className="flex items-center gap-3">
                  <Mail size={18} className="text-primary-600 dark:text-accent-400" /> {siteMetadata.email}
                </p>
                <p className="flex items-center gap-3">
                  <Briefcase size={18} className="text-primary-600 dark:text-accent-400" /> {siteMetadata.location}
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={18} className="text-primary-600 dark:text-accent-400" />
                  <a href="https://canva.link/2arqd25c4i3jfzo" className="hover:text-slate-900 dark:hover:text-white">
                    CV
                  </a>
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <br />
      <br />
    </div>
  );
};

export default HomePage;
