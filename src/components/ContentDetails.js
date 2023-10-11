// src/components/ContentDetails.js
import React, { useState, useEffect } from 'react';

function ContentDetails({ hw8byo71fl0m, match }) {
  const [contentDetails, setContentDetails] = useState(null);

  useEffect(() => {
    // Fetch the details of the selected content when the component mounts
    fetchContentDetails();
  }, [match.params.id]);

  const fetchContentDetails = () => {
    const showId = match.params.id;

    fetch(`https://academics.newtonschool.co/api/v1/ott/show/${showId}`, {
      method: 'GET',
      headers: {
        projectId: hw8byo71fl0m,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContentDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching content details: ', error);
      });
  };

  if (!contentDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Content Details</h2>
      <h3>Title: {contentDetails.name}</h3>
      <p>Genre: {contentDetails.genre}</p>
      <p>Release Year: {contentDetails.releaseYear}</p>
      <p>Synopsis: {contentDetails.synopsis}</p>
      <p>Cast: {contentDetails.cast.join(', ')}</p>
      <p>Directors: {contentDetails.directors.join(', ')}</p>
      <p>Rating: {contentDetails.rating}</p>

      {/* Include a video player here for content playback */}
      <video controls width="500" height="300">
        <source src={contentDetails.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Add a "Continue Watching" feature here */}
      <button>Resume Playback</button>
    </div>
  );
}

export default ContentDetails;


