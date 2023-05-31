import { useState, useEffect, useCallback } from "react";
import FilterSection from "./components/FilterSection";
import ArticleList from "./components/ArticleList";
import PinnedArticles from "./components/PinnedArticles";
import { MOCK } from "./mocks/mocks";
import "./app.scss";
import { fetchArticles } from "./api/api";

export const FETCH_STATE = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};

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
  const [fetchState, setFetchState] = useState(FETCH_STATE.LOADING);
  // pinnedArticles format should be {[title]: articleInfo, ...}
  const [pinnedArticles, setPinnedArticles] = useState({});

  useEffect(() => {
    updateArticles(date);
  }, [date]);

  const updateArticles = useCallback((date) => {
    setFetchState(FETCH_STATE.LOADING);
    fetchArticles(date)
      .then((newArticles) => {
        setFetchState(FETCH_STATE.SUCCESS);
        setArticles(newArticles);
      })
      .catch(() => {
        setFetchState(FETCH_STATE.ERROR);
      });
  }, []);

  const handleDateChange = useCallback((value) => {
    const newDate = getDateArr(value);
    setDate(newDate);
  }, []);

  const handleResultCountChange = useCallback((value) => {
    setResultCount(value);
  }, []);

  const handlePinClick = (article) => {
    const newPinnedArticles = { ...pinnedArticles };
    if (newPinnedArticles[article.article]) {
      delete newPinnedArticles[article.article];
    } else {
      newPinnedArticles[article.article] = { ...article };
    }

    setPinnedArticles(newPinnedArticles);
  };

  return (
    <div className="app">
      <PinnedArticles articles={pinnedArticles} onPin={handlePinClick} />
      <FilterSection
        resultCount={resultCount}
        date={date}
        onDateChange={handleDateChange}
        onResultCountChange={handleResultCountChange}
      />
      <ArticleList
        articles={articles}
        resultCount={resultCount}
        fetchState={fetchState}
        pinnedArticles={pinnedArticles}
        onPin={handlePinClick}
      />
    </div>
  );
}

export default App;
