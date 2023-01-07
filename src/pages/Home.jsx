/* components */
import About from "../components/About";
import NobelForm from "../components/NobelForm";
import NobelInfo from "../components/NobelInfo";

function Home({ awardYear, awardData, handleChange }) {
  return (
    <>
      <About />
      <section className="container nobel-container" id="nobel-wrapper">
        <NobelForm awardYear={awardYear} handleChange={handleChange} />
        <NobelInfo awardData={awardData} />
      </section>
    </>
  );
}

export default Home;
