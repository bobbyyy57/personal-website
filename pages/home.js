import AboutMe from "../components/AboutMe";
import Experiences from "../components/Experiences";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className=" flex flex-col justify-center items-center">
        <div className="space-y-[7%] w-6/12 flex justify-center flex-col items-center">
          <div className="mt-[6%]">
            <Landing />
          </div>
          <Projects />
          <Experiences />
          <AboutMe />
        </div>
      </div>
    </>
  );
}
