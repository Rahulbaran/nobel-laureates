const NobelForm = ({ awardYear, handleChange }) => {
  return (
    <div className="card form__wrapper">
      <form className="form" spellCheck="false" autoComplete="off">
        <h2>Nobel Award Year Form</h2>

        <input
          type="number"
          name="year"
          placeholder="enter year"
          value={awardYear}
          onChange={e => handleChange(e.target.valueAsNumber)}
          title="year must be in between 2018 & 2022"
        />
      </form>
    </div>
  );
};

export default NobelForm;
