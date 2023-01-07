import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* pages */
import Home from "./pages/Home";
import NotFound from "./pages/404";

/* data */
import { awardsData, awardYears } from "./data/NobelsData";

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              awardYear={awardYear}
              awardData={awardData}
              handleChange={handleChange}
            />
          }
        >
          <Route
            path="home"
            element={
              <Home
                awardYear={awardYear}
                awardData={awardData}
                handleChange={handleChange}
              />
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
