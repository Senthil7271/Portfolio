import TeslaTowerIntro from "@/components/intro/TeslaTowerIntro";
import TeslaHero from "@/components/hero/TeslaHero";
import MagneticFieldSection from "@/components/sections/MagneticFieldSection";
import CylindricalProjectCarousel from "@/components/carousel/CylindricalProjectCarousel";
import ElectricExperienceTimeline from "@/components/sections/ElectricExperienceTimeline";
import LaboratorySkillBoard from "@/components/sections/LaboratorySkillBoard";
import AchievementSwitchboard from "@/components/sections/AchievementSwitchboard";
import BlueprintEducation from "@/components/sections/BlueprintEducation";
import ElectricalContactSwitch from "@/components/sections/ElectricalContactSwitch";

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Full-Screen Tesla Wardenclyffe Tower Intro */}
      <TeslaTowerIntro />

      {/* 2. Main Engineering Portfolio Content */}
      <div className="flex flex-col space-y-0">
        <TeslaHero />
        <MagneticFieldSection />
        <CylindricalProjectCarousel />
        <ElectricExperienceTimeline />
        <LaboratorySkillBoard />
        <AchievementSwitchboard />
        <BlueprintEducation />
        <ElectricalContactSwitch />
      </div>
    </>
  );
}
