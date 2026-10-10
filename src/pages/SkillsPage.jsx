import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Skills from '../components/Skills';
import PageNavFooter from '../components/PageNavFooter';
import Footer from '../components/Footer';

export default function SkillsPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="Competencies & Tools"
        title="Technical Skills"
        subtitle="Programming languages, systems, databases, cloud platforms, and engineering workflows practiced through practical projects."
        breadcrumb="Skills"
      />
      <main>
        <Skills hideHeader />
      </main>
      <PageNavFooter
        prev={{ label: 'Education', path: '/education' }}
        next={{ label: 'Featured Projects', path: '/projects' }}
      />
      <Footer />
    </div>
  );
}
