import "./articleListItem.scss";
import PushPin from "@mui/icons-material/PushPin";

function ArticleListItem({ article, onPin, isPinned }) {
  const handlePinClick = () => {
    onPin(article);
  };

  return (
    <div className="article-list-item" data-testid="article-list-item">
      <div className="title">{article.article}</div>
      <div className="views">
        <label>Views:</label>
        <div>{article.views}</div>
      </div>
      <PushPin
        color={isPinned ? "primary" : "disabled"}
        tabIndex="0"
        onClick={handlePinClick}
        data-testid="pin-icon"
      />
    </div>
  );
}

export default ArticleListItem;
