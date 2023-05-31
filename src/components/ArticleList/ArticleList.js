import { memo, useMemo } from "react";
import ArticleListItem from "../ArticleListItem";
import "./articleList.scss";

function ArticleList({ articles, resultCount }) {
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
