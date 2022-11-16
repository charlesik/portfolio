import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Form from "../components/Form";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <div className="bg-br text-white mx-6">
      <NavBar />
      <Intro />
      <Projects />
      <Form/>
      <Footer/>
    </div>
  );
}

export default MainPage;
