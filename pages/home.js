import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
// import NavBar from "../components/NavBar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="space-y-[7%] flex justify-center flex-col items-center">
        <div className="mt-[6%]">
          <Landing />
        </div>
        <Projects />
        <Experiences />
        <AboutMe />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}
