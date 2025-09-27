import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TargetDevelopmentSection from '../components/TargetDevelopmentSection';
import InteractiveLearningSection from '../components/InteractiveLearningSection';
import TrustedByParentsSection from '../components/TrustedByParentsSection';
import FourReasonsSection from '../components/FourReasonsSection';
import QualityTeachingSection from '../components/QualityTeachingSection';
import LearningRoadmapSection from '../components/LearningRoadmapSection';
import CompetitionsSection from '../components/CompetitionsSection';
import WorksheetsSection from '../components/WorksheetsSection';
import ActivitySection from '../components/ActivitySection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FourReasonsSection />
      <TargetDevelopmentSection />
      <InteractiveLearningSection />
      <TrustedByParentsSection />
      <QualityTeachingSection />
      <LearningRoadmapSection />
      <CompetitionsSection />
      <WorksheetsSection />
      <ActivitySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
