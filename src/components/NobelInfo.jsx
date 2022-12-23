function NobelInfo({ awardData }) {
  const data = awardData.awards;

  const joinStrings = i => {
    return data[i].laureates.length > 1
      ? `${data[i].laureates.slice(0, -1).join(", ")} & ${data[i].laureates.at(
          -1
        )}`
      : data[i].laureates[0];
  };

  if (data.length > 0)
    return (
      <div className="card nobel__info-wrapper">
        <h2>Award Winners</h2>

        <div className="medicine-winner">
          <h3>Medicine</h3>
          <p>{joinStrings(0)}</p>
        </div>

        <div className="physics-winner">
          <h3>Physics</h3>
          <p>{joinStrings(1)}</p>
        </div>

        <div className="peace-winner">
          <h3>Peace</h3>
          <p>{joinStrings(2)}</p>
        </div>

        <div className="literature-winner">
          <h3>Literature</h3>
          <p>{joinStrings(3)}</p>
        </div>

        <div className="economic-winner">
          <h3>Economic Science</h3>
          <p>{joinStrings(4)}</p>
        </div>

        <div className="chemistry-winner">
          <h3>Chemistry</h3>
          <p>{joinStrings(5)}</p>
        </div>
      </div>
    );
}

export default NobelInfo;
