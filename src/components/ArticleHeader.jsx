import ArticleThumbnail from './ArticleThumbnail';
import ArticleHeaderText from './ArticleHeaderText';

export default function ArticleHeader({article}) {
  return (
    <div className = "article-header">
      <ArticleThumbnail 
        article = {article}
      />
      <ArticleHeaderText
        article = {article}
      />
    </div>
  );
}