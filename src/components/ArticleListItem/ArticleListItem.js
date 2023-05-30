function ArticleListItem({ title, views }) {
  return (
    <div>
      <div>{title}</div>
      <div>Views: {views}</div>
    </div>
  );
}

export default ArticleListItem;
