import ArticleListItem from "../ArticleListItem";

function ArticleList({ articles }) {
  const articleItems = articles.map((article) => (
    <ArticleListItem
      title={article.article}
      views={article.views}
      key={article.article}
    />
  ));
  return <div>{articleItems}</div>;
}

export default ArticleList;
