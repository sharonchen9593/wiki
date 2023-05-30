function DateField({ year, month, day, onChange }) {
  const value = `${year}-${month}-${day}`;

  const handleChange = (event) => {
    onChange(event.target.valueAsDate);
  };
  return (
    <div>
      <label htmlFor="article">Start date:</label>
      <input
        type="date"
        id="article"
        name="article-date"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default DateField;
