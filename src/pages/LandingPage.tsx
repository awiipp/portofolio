import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import StackSection from "../components/StackSection";

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <main>
                <HeroSection />
                <ProjectsSection />
                <StackSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
