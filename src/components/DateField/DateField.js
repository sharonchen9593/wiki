import { memo, useMemo, useCallback } from "react";

function DateField({ year, month, day, onChange }) {
  const value = useMemo(() => {
    return `${year}-${month}-${day}`;
  }, [year, month, day]);

  const handleChange = useCallback((event) => {
    console.log(event.target.value);
    if (event.target.value) {
      onChange(event.target.valueAsDate);
    }
  }, []);

  return (
    <div className="filter-item">
      <label htmlFor="article">Start date:</label>
      <input
        type="date"
        id="article"
        name="article-date"
        onChange={handleChange}
        data-testid="date-field"
      />
    </div>
  );
}

export default memo(DateField);
