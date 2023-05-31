import { memo, useMemo } from "react";
import ArticleListItem from "../ArticleListItem";
import "./articleList.scss";
import { FETCH_STATE } from "../../App";

function ArticleList({ articles, resultCount, fetchState }) {
  if (fetchState === FETCH_STATE.LOADING) {
    return <div>Loading...</div>;
  }

  if (fetchState === FETCH_STATE.ERROR) {
    return <div>Error fetching articles</div>;
  }

  const filteredArticles = articles.slice(0, resultCount);

  const articleItems = filteredArticles.map((article) => (
    <ArticleListItem
      title={article.article}
      views={article.views}
      key={article.article}
    />
  ));
  return <div className="article-list">{articleItems}</div>;
}

export default memo(ArticleList);
