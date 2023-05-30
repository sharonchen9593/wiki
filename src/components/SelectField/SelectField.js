function SelectField({ selected, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="result-count">Number of results</label>
      <select
        name="result-count"
        id="result-count"
        value={selected}
        onChange={handleChange}
      >
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>
    </div>
  );
}

export default SelectField;
