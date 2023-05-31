import ArticleListItem from "../ArticleListItem";

function PinnedArticles({ articles, onPin }) {
  const pinnedArticles = Object.keys(articles).map((article) => (
    <ArticleListItem
      article={articles[article]}
      isPinned
      onPin={onPin}
      key={article.article}
    />
  ));

  return (
    <div className="article-list">
      Pinned Articles
      <div>{pinnedArticles.length ? pinnedArticles : "No pinned articles"}</div>
    </div>
  );
}

export default PinnedArticles;
