import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Projects from '../components/Projects';
import PageNavFooter from '../components/PageNavFooter';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="Hands-on Engineering"
        title="Featured Projects"
        subtitle="Practical applications exploring computer architecture simulation, web heuristics, and procedural systems programming."
        breadcrumb="Projects"
      />
      <main>
        <Projects hideHeader />
      </main>
      <PageNavFooter
        prev={{ label: 'Technical Skills', path: '/skills' }}
        next={{ label: 'Certifications & Honors', path: '/certifications' }}
      />
      <Footer />
    </div>
  );
}
