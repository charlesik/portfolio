import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Form from "../components/Form";

function MainPage() {
  return (
    <div className="bg-br text-white mx-6">
      <NavBar />
      <Intro />
      <Projects />
      <Form/>
    </div>
  );
}

export default MainPage;
