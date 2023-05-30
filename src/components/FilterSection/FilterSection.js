import DateField from "../DateField";
import SelectField from "../SelectField";
import React from "react";

function FilterSection({
  date,
  resultCount,
  onResultCountChange,
  onDateChange,
}) {
  return (
    <div>
      <DateField
        year={date[0]}
        month={date[1]}
        day={date[2]}
        onChange={onDateChange}
      />
      <SelectField selected={resultCount} onChange={onResultCountChange} />
    </div>
  );
}

export default React.memo(FilterSection);
