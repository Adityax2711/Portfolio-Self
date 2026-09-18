import { usePortfolio } from './hooks/usePortfolio';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ResearchSection } from './components/ResearchSection';
import { ExperienceSection } from './components/ExperienceSection';
import { LeadershipSection } from './components/LeadershipSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';

export function App() {
  const {
    profile,
    skills,
    experience,
    leadership,
    certifications,
    projects,
    research,
    education,
  } = usePortfolio();

  return (
    <div className="min-h-screen bg-[#060a14] text-[#E0E0E0] selection:bg-purple-600 selection:text-white">
      {/* NAVBAR */}
      <Navbar shortName={profile.shortName} />

      {/* 1. HERO */}
      <HeroSection profile={profile} />

      {/* 2. ABOUT & SKILLS */}
      <AboutSection profile={profile} skills={skills} education={education} />

      {/* 3. EDUCATION */}
      <EducationSection education={education} />

      {/* 4. RESEARCH */}
      <ResearchSection research={research} />

      {/* 5. EXPERIENCE */}
      <ExperienceSection experience={experience} />

      {/* 6. LEADERSHIP & COMMUNITY */}
      <LeadershipSection leadership={leadership} />

      {/* 7. CERTIFICATIONS */}
      <CertificationsSection certifications={certifications} />

      {/* 8. PROJECTS */}
      <ProjectsSection projects={projects} />

      {/* 9. FOOTER & CONTACT */}
      <Footer profile={profile} />
    </div>
  );
}

export default App;
