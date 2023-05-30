import { memo, useMemo, useCallback } from "react";

function DateField({ year, month, day, onChange }) {
  const value = useMemo(() => {
    return `${year}-${month}-${day}`;
  }, [year, month, day]);

  const handleChange = useCallback((event) => {
    onChange(event.target.valueAsDate);
  }, []);

  return (
    <div className="filter-item">
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

export default memo(DateField);
