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
      {/* flex justify-center flex-col items-center  */}
      <NavBar />
      <div className="flex justify-center flex-col items-center ">
        <div className="space-y-[20%] flex justify-center flex-col items-center  bg-bob-background w-1/2">
          <div className="mt-[15%] ">
            <Landing />
          </div>
          <Projects />
          <Experiences />
          <AboutMe />
          <ContactMe />
          <Footer />
        </div>
      </div>
    </>
  );
}
