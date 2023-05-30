import "./articleListItem.scss";

function ArticleListItem({ title, views }) {
  return (
    <div className="article-list-item">
      <div className="title">{title}</div>
      <div className="views">
        <label>Views:</label>
        <div>{views}</div>
      </div>
    </div>
  );
}

export default ArticleListItem;
