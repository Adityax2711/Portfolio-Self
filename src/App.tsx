import { usePortfolio } from './hooks/usePortfolio';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';

export function App() {
  const { profile, skills, experience, certifications, projects, education, testimonials } = usePortfolio();

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#E0E0E0] selection:bg-purple-600 selection:text-white">
      {/* 2. NAVBAR */}
      <Navbar shortName={profile.shortName} />

      {/* 1. HERO */}
      <HeroSection profile={profile} />

      {/* 3. ABOUT & SKILLS */}
      <AboutSection profile={profile} skills={skills} education={education} />

      {/* 4. EXPERIENCE */}
      <ExperienceSection experience={experience} />

      {/* 5. CERTIFICATIONS */}
      <CertificationsSection certifications={certifications} />

      {/* 6. SERVICES */}
      <ServicesSection />

      {/* 7. PROJECTS */}
      <ProjectsSection projects={projects} />

      {/* 7. TESTIMONIALS */}
      <TestimonialsSection testimonials={testimonials} />

      {/* 8. FOOTER */}
      <Footer profile={profile} />
    </div>
  );
}

export default App;
