import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import About from '../components/About';
import PageNavFooter from '../components/PageNavFooter';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="Background & Persona"
        title="About Falak Baharwani"
        subtitle="A Computer Science student at Chandigarh University exploring artificial intelligence, system foundations, and creative disciplines."
        breadcrumb="About"
      />
      <main>
        <About hideHeader />
      </main>
      <PageNavFooter
        prev={{ label: 'Home', path: '/' }}
        next={{ label: 'Education & Academics', path: '/education' }}
      />
      <Footer />
    </div>
  );
}
