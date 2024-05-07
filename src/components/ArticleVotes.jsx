import { useState, useEffect } from 'react';

import { patchArticleVotes } from '../utils';

export default function ArticleVotes({article, setArticle}) {
  const [voteChange, setVoteChange] = useState(0);

  function handleVote(incVote) {
    setArticle(article => ({ ...article, votes: article.votes + incVote }));
    patchArticleVotes(article.article_id, incVote);
    setVoteChange(currVoteChange => currVoteChange + incVote);
  }

  function downVote() {
    handleVote(-1);
  }

  function upVote() {
    handleVote(1);
  }

  return (
    <div className = "article-votes">
      <button disabled = {voteChange === -1} onClick={downVote}> - </button>
      <p>{article.votes}</p>
      <button disabled = {voteChange === 1} onClick={upVote}> + </button>
    </div>
  );
}