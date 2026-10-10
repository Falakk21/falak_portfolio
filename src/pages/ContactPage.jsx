import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import PageNavFooter from '../components/PageNavFooter';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="Let's Connect"
        title="Get In Touch"
        subtitle="Direct communication channels and messaging form for student internships, project collaborations, and engineering discussions."
        breadcrumb="Contact"
      />
      <main>
        <Contact hideHeader />
      </main>
      <PageNavFooter
        prev={{ label: 'Curriculum Vitae', path: '/resume' }}
        next={{ label: 'Number Systems Playground', path: '/playground' }}
      />
      <Footer />
    </div>
  );
}
