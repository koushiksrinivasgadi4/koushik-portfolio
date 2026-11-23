import React, { useState } from 'react';
import Welcome from './Welcome';
import Counter from './Counter';
import Login from './Login';
import EventDemo from './EventDemo';
import FormDemo from './FormDemo';
import SkillsDemo from './SkillsDemo';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail, Download, Sparkles, Code2, BrainCircuit, Database, Layers3, Terminal, ExternalLink, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { profile, skillGroups, projects, journey } from './data/portfolio.js';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

function SectionHeading({ eyebrow, title, text }) {
  return <motion.div className="section-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
    <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </motion.div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['AI Focus', '#ai'], ['Contact', '#contact']];
  return <header className="topbar">
    <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">{"</>"}</span><span>{profile.initials}<i>.</i></span></a>
    <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15} /></a>
    </nav>
  </header>;
}

function Hero() {
  return <section id="home" className="hero section-wrap">
    <div className="hero-grid">
      <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
        <motion.div className="availability" variants={fadeUp}><span className="pulse" /> OPEN TO OPPORTUNITIES <span className="availability-line" /></motion.div>
        <motion.p className="hero-kicker" variants={fadeUp}>HELLO, WORLD. I'M</motion.p>
        <motion.h1 variants={fadeUp}>{profile.name}<br /><span className="gradient-text">builds what’s next.</span></motion.h1>
        <motion.h2 variants={fadeUp}>{profile.role} <span className="role-divider">/</span> AI Explorer</motion.h2>
        <motion.p className="hero-description" variants={fadeUp}>{profile.tagline}</motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
          <a className="button button-ghost" href="/resume.pdf" download="Koushik-Srinivas-Gadi-Resume.pdf"><Download size={16} /> Domain Resume </a>
        </motion.div>
        <motion.div className="social-row" variants={fadeUp}>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
          <span className="social-location"><MapPin size={14} /> {profile.location}</span>
        </motion.div>
      </motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .88, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .25 }}>
        <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
        <div className="visual-glow" />
        <div className="core-card">
          <div className="core-top"><span>DEV_PROFILE.exe</span><span className="core-dots">● ● ●</span></div>
          <div className="core-icon"><BrainCircuit size={62} strokeWidth={1.15} /></div>
          <div className="core-name">{profile.initials}<span>_</span></div>
          <div className="core-caption">JAVA <b>+</b> INTELLIGENCE</div>
          <div className="core-progress"><span /></div>
          <div className="core-foot"><span>BUILDING</span><span>v.2026</span></div>
        </div>
        <div className="float-chip chip-java"><Code2 size={15} /> Java</div>
        <div className="float-chip chip-ai"><Sparkles size={15} /> AI / LLM</div>
        <div className="float-chip chip-api"><Terminal size={15} /> REST APIs</div>
        <div className="visual-label">SYSTEM ONLINE <span>✳</span></div>
      </motion.div>
    </div>
    <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
  </section>;
}

function About() {
  return <section id="about" className="section-wrap section-block">
    <SectionHeading eyebrow="01 / ABOUT ME" title={<>Engineering today.<br /><span className="gradient-text">Imagining tomorrow.</span></>} text="A little about the developer behind the code." />
    <div className="about-grid">
      <motion.div className="about-main glass-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="card-index">01 — THE MINDSET</span>
        <h3>Curiosity is my favorite <span className="gradient-text">framework.</span></h3>
        <p>{profile.intro}</p>
        <p>My current direction is to combine dependable backend engineering with practical AI capabilities—creating applications that are useful, maintainable and thoughtfully designed.</p>
        <a className="text-link" href="#contact">Let's connect <ArrowUpRight size={16} /></a>
      </motion.div>
      <div className="about-side">
        {[
          { icon: <Code2 />, title: 'Backend first', desc: 'APIs, application logic and clean architecture.' },
          { icon: <BrainCircuit />, title: 'AI curious', desc: 'Learning LLMs, RAG and AI integration patterns.' },
          { icon: <Layers3 />, title: 'Always building', desc: 'Turning concepts into practical projects.' }
        ].map((item, i) => <motion.div className="mini-card" key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * .1 }}>
          <div className="mini-icon">{item.icon}</div><div><h4>{item.title}</h4><p>{item.desc}</p></div>
        </motion.div>)}
      </div>
    </div>
  </section>;
}

function Skills() {
  return <section id="skills" className="section-wrap section-block">
    <SectionHeading eyebrow="02 / TECH STACK" title={<>Tools I use to <span className="gradient-text">create.</span></>} text="A snapshot of my development toolkit. Update this list to reflect your current, demonstrable skills." />
    <div className="skills-grid">
      {skillGroups.map((group, i) => <motion.div className="skill-card glass-card" key={group.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="skill-card-top"><span className="skill-number">0{i + 1}</span><span className="skill-symbol">{[<Code2 />, <Database />, <Layers3 />, <Terminal />][i]}</span></div>
        <h3>{group.title}</h3><p className="skill-note">{group.note}</p>
        <div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
      </motion.div>)}
    </div>
  </section>;
}

function Projects() {
  const icons = [<Database />, <Sparkles />, <BrainCircuit />];
  return <section id="projects" className="section-wrap section-block">
    <SectionHeading eyebrow="03 / SELECTED WORK" title={<>Ideas into <span className="gradient-text">applications.</span></>} text="A mix of backend work and AI-focused concepts. Replace starter descriptions and links with your actual project repositories and demos." />
    <div className="projects-grid">
      {projects.map((project, i) => <motion.article className="project-card glass-card" key={project.number} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="project-top"><span className="project-number">{project.number} / 03</span><span className="project-icon">{icons[i]}</span></div>
        <div className="project-category">{project.category}</div><h3>{project.title}</h3><p>{project.description}</p>
        <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-bottom"><span className="project-status"><i />{project.status}</span><a href={project.github} target="_blank" rel="noreferrer" aria-label={`GitHub for ${project.title}`}><Github size={18} /></a></div>
      </motion.article>)}
    </div>
  </section>;
}

function AISection() {
  const concepts = [
    ['01', 'Generative AI', 'Understanding how large language models can power useful product experiences.'],
    ['02', 'Retrieval-Augmented Generation', 'Exploring document retrieval, embeddings and grounded question answering.'],
    ['03', 'AI + Backend Integration', 'Connecting AI capabilities to secure, maintainable Java and Python services.']
  ];
  return <section id="ai" className="section-wrap section-block ai-section">
    <div className="ai-backdrop" />
    <SectionHeading eyebrow="04 / THE NEXT FRONTIER" title={<>Backend thinking.<br /><span className="gradient-text">AI possibilities.</span></>} text="The direction I'm exploring: practical AI features built on a strong software engineering foundation." />
    <div className="ai-grid">
      {concepts.map(([num, title, desc]) => <motion.div className="ai-item" key={num} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span>{num}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight className="ai-arrow" size={19} />
      </motion.div>)}
    </div>
    <div className="journey">
      <div className="journey-heading"><span className="eyebrow">MY DEVELOPMENT JOURNEY</span><span className="journey-line" /></div>
      {journey.map(item => <div className="journey-row" key={item.title}><span className="journey-year">{item.year}</span><div><h4>{item.title}</h4><p>{item.detail}</p></div></div>)}
    </div>
  </section>;
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [state, setState] = useState({ loading: false, type: '', message: '' });
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });
  async function submit(e) {
    e.preventDefault();
    setState({ loading: true, type: '', message: '' });
    try {
      const base = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await fetch(`${base}/api/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'Could not send your message. Please try again.');
      setState({ loading: false, type: 'success', message: 'Message received. Thank you for reaching out!' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setState({ loading: false, type: 'error', message: error.message || 'Backend unavailable. Please email me directly.' });
    }
  }
  return <section id="contact" className="section-wrap section-block contact-section">
    <SectionHeading eyebrow="05 / GET IN TOUCH" title={<>Have an idea?<br /><span className="gradient-text">Let's talk.</span></>} text="Open to conversations about Java development, backend engineering and AI-powered applications." />
    <div className="contact-grid">
      <div className="contact-info">
        <h3>Let's build something<br />meaningful.</h3><p>Have an opportunity, collaboration idea or just want to connect? Send a message.</p>
        <a className="contact-detail" href={`mailto:${profile.email}`}><span><Mail size={18} /></span><div><small>EMAIL ME</small><b>{profile.email}</b></div><ArrowUpRight size={16} /></a>
        <a className="contact-detail" href={profile.linkedin} target="_blank" rel="noreferrer"><span><Linkedin size={18} /></span><div><small>CONNECT ON</small><b>LinkedIn</b></div><ArrowUpRight size={16} /></a>
        <a className="contact-detail" href={profile.github} target="_blank" rel="noreferrer"><span><Github size={18} /></span><div><small>CODE ON</small><b>GitHub</b></div><ArrowUpRight size={16} /></a>
        <a className="contact-detail" href={`tel:${profile.phone}`}>
          <span><Mail size={18} /></span>
          <div>
            <small>CALL ME</small>
            <b>{profile.phone}</b>
          </div>
          <ArrowUpRight size={16} />
        </a>
      </div>
      <form className="contact-form glass-card" onSubmit={submit}>
        <div className="form-heading"><span> SEND A MESSAGE</span><span className="form-live"><i /> SECURE FORM</span></div>
        <label>Your name<input name="name" value={form.name} onChange={update} placeholder="Jane Smith" required minLength="2" maxLength="80" /></label>
        <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="jane@example.com" required maxLength="160" /></label>
        <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="Let's work together" maxLength="120" /></label>
        <label>Your message<textarea name="message" value={form.message} onChange={update} placeholder="Tell me a little about what you have in mind..." required minLength="10" maxLength="3000" rows="4" /></label>
        {state.message && <div className={`form-feedback ${state.type}`}>{state.type === 'success' ? <CheckCircle2 size={17} /> : <AlertCircle size={17} />}{state.message}</div>}
        <button className="button button-primary submit-button" type="submit" disabled={state.loading}>{state.loading ? 'Sending...' : 'Send message'} <Send size={16} /></button>
        <p className="form-note">Your message is sent to the portfolio backend API.</p>
      </form>
    </div>
  </section>;
}

function Footer() {
  return <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">{"</>"}</span><span>{profile.initials}<i>.</i></span></a><p>Designed with curiosity. Built with code.</p><span>© {new Date().getFullYear()} {profile.name}</span></footer>;
}


export default function App() {
  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AISection />
        <Contact />
      </main>

      <Footer />

      <a className="back-top" href="#home" aria-label="Back to top">
        ↑
      </a>
    </div>
  );
}

