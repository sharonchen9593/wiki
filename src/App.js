import { useState, useEffect, useCallback } from "react";
import FilterSection from "./components/FilterSection";
import ArticleList from "./components/ArticleList";
import { MOCK } from "./mocks/mocks";

const getYesterdayDate = () => {
  const todayDate = new Date();
  const yesterday = new Date();
  yesterday.setDate(todayDate.getDate() - 1);
  return getDateArr(yesterday);
};

const getDateArr = (date) => {
  const year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString(); // + 1 because month starts at index 0
  let day = date.getDate().toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  if (day.length === 1) {
    day = "0" + day;
  }

  return [year, month, day];
};

function App() {
  // date state should be in the format [year, month, day]
  const [date, setDate] = useState(getYesterdayDate());
  const [resultCount, setResultCount] = useState(100);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(MOCK.items[0].articles);
  }, []);

  const handleDateChange = useCallback((value) => {
    const newDate = getDateArr(value);
    setDate(newDate);
  }, []);

  const handleResultCountChange = useCallback((value) => {
    setResultCount(value);
  }, []);

  return (
    <div className="app">
      <FilterSection
        resultCount={resultCount}
        date={date}
        onDateChange={handleDateChange}
        onResultCountChange={handleResultCountChange}
      />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
