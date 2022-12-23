import { useState } from "react";
import About from "./components/About";
import NobelForm from "./components/NobelForm";
import NobelInfo from "./components/NobelInfo";
import { awardsData, awardYears } from "./NobelsData";

function App() {
  const [awardYear, setAwardYear] = useState(awardYears[0]);
  const [awardData, setAwardData] = useState(awardsData[0]);

  const displayAwards = function (year) {
    const data = awardsData[awardYears.indexOf(year)];
    setAwardData(data);
  };

  const handleChange = year => {
    setAwardYear(() => (year ? year : ""));
    if (year >= awardYears.at(-1) && year <= awardYears[0]) {
      displayAwards(year);
    }
  };

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

export default App;
