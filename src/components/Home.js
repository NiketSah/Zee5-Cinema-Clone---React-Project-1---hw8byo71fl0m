// src/components/Home.js
// Home.js
import React, { useState, useEffect } from 'react';

function Home({ projectId }) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch a list of shows
    fetch(`https://academics.newtonschool.co/api/v1/ott/show?limit=100`, {
      headers: {
        projectId: hw8byo71fl0m,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the shows state with the fetched data
        setShows(data.data);
      })
      .catch((error) => {
        console.error('Error fetching shows:', error);
      });
  }, [projectId]);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        {/* Add your carousel or promotional content here */}
      </div>

      {/* Trending Shows */}
      <div className="trending-shows">
        <h2>Trending Shows</h2>
        <div className="show-list">
          {shows.map((show) => (
            <div key={show.id} className="show-card">
              <img src={show.thumbnailUrl} alt={show.name} />
              <h3>{show.name}</h3>
              <p>{show.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Shows */}
      <div className="popular-shows">
        <h2>Popular Shows</h2>
        <div className="show-list">
          {/* Similar to the Trending Shows section */}
        </div>
      </div>
    </div>
  );
}

export default Home;

