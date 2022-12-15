const NobelForm = () => {
  return (
    <div className="card form__wrapper">
      <form className="form" spellCheck="false" autoComplete="off">
        <h2>Nobel Award Year Form</h2>

        <input type="number" name="year" placeholder="enter year" />
      </form>
    </div>
  );
};

export default NobelForm;
