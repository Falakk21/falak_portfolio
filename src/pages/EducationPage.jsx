import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Education from '../components/Education';
import PageNavFooter from '../components/PageNavFooter';
import Footer from '../components/Footer';

export default function EducationPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="Academic Foundations"
        title="Education &amp; Background"
        subtitle="Formal Computer Science & Engineering degree coursework with specialization in Generative AI at Chandigarh University."
        breadcrumb="Education"
      />
      <main>
        <Education hideHeader />
      </main>
      <PageNavFooter
        prev={{ label: 'About Me', path: '/about' }}
        next={{ label: 'Technical Skills', path: '/skills' }}
      />
      <Footer />
    </div>
  );
}
