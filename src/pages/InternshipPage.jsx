import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Internship from '../components/Internship';
import PageNavFooter from '../components/PageNavFooter';
import Footer from '../components/Footer';

export default function InternshipPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="Community Engagement"
        title="Social Internship"
        subtitle="Grassroots social contribution with Shresth Navnirman Foundation across rural panchayat and community outreach programs."
        breadcrumb="Internship"
      />
      <main>
        <Internship hideHeader />
      </main>
      <PageNavFooter
        prev={{ label: 'Certifications', path: '/certifications' }}
        next={{ label: 'Curriculum Vitae', path: '/resume' }}
      />
      <Footer />
    </div>
  );
}
