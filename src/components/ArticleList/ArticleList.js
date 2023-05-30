import ArticleListItem from "../ArticleListItem";
import "./articleList.scss";

function ArticleList({ articles }) {
  const articleItems = articles.map((article) => (
    <ArticleListItem
      title={article.article}
      views={article.views}
      key={article.article}
    />
  ));
  return <div className="article-list">{articleItems}</div>;
}

export default ArticleList;
