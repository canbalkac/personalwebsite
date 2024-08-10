'use client'
import AboutMe from "./_components/AboutMe";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <>
        <div className="lg:flex-1 lg:ml-[220px]">
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
    </>
  );
}