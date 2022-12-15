import About from "./components/About";
import NobelForm from "./components/NobelForm";
import NobelInfo from "./components/NobelInfo";

function App() {
  return (
    <>
      <About />
      <section className="container nobel-container" id="nobel-wrapper">
        <NobelForm />
        <NobelInfo />
      </section>
    </>
  );
}

export default App;
