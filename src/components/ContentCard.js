
import React from 'react';
import { Link } from 'react-router-dom';

function ContentCard({ content }) {
  return (
    <div>
      <h3>{content.title}</h3>
      <img src={content.thumbnailUrl} alt={content.title} />
      <Link to={`/content/${content.id}`}>View Details</Link>
    </div>
  );
}

export default ContentCard;

