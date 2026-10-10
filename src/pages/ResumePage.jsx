import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import ResumeSection from '../components/ResumeSection';
import PageNavFooter from '../components/PageNavFooter';
import Footer from '../components/Footer';

export default function ResumePage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="Official Credentials"
        title="Curriculum Vitae"
        subtitle="Complete candidate resume for Falak Baharwani with inline document preview, verification, and instant download."
        breadcrumb="Resume"
      />
      <main>
        <ResumeSection hideHeader />
      </main>
      <PageNavFooter
        prev={{ label: 'Social Internship', path: '/internship' }}
        next={{ label: 'Get In Touch', path: '/contact' }}
      />
      <Footer />
    </div>
  );
}
