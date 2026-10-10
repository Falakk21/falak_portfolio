import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Certifications from '../components/Certifications';
import PageNavFooter from '../components/PageNavFooter';
import Footer from '../components/Footer';

export default function CertificationsPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="Validated Credentials"
        title="Certifications &amp; Achievements"
        subtitle="Industry credentials from Microsoft and verified honors in national mental arithmetic competition."
        breadcrumb="Certifications"
      />
      <main>
        <Certifications hideHeader />
      </main>
      <PageNavFooter
        prev={{ label: 'Featured Projects', path: '/projects' }}
        next={{ label: 'Social Internship', path: '/internship' }}
      />
      <Footer />
    </div>
  );
}
