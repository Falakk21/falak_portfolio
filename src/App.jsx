import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

// Multi-Page Route Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import InternshipPage from './pages/InternshipPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import PlaygroundPage from './pages/PlaygroundPage';

export default function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <>
      <LoadingScreen onFinish={() => setLoadingFinished(true)} />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/internship" element={<InternshipPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/number-systems-playground" element={<Navigate to="/playground" replace />} />
          {/* Wildcard Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
