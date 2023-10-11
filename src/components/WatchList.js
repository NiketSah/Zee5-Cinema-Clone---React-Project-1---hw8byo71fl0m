// Watchlist.js
import React, { useState, useEffect } from 'react';

function Watchlist({ userToken, projectId }) {
  const [watchlist, setWatchlist] = useState([]);
  const [showIdToAdd, setShowIdToAdd] = useState('');
  const [showIdToRemove, setShowIdToRemove] = useState('');

  useEffect(() => {
    // Fetch the user's watchlist when the component mounts
    fetchWatchlist();
  }, []);

  const fetchWatchlist = () => {
    fetch('https://academics.newtonschool.co/api/v1/ott/watchlist/like', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'projectId': hw8byo71fl0m,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setWatchlist(data);
      })
      .catch((error) => {
        console.error('Error fetching watchlist: ', error);
      });
  };

  const handleAddToWatchlist = () => {
    if (!showIdToAdd) {
      return;
    }

    fetch('https://academics.newtonschool.co/api/v1/ott/watchlist/like', {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'projectId': hw8byo71fl0m,
      },
      body: JSON.stringify({ showId: showIdToAdd }),
    })
      .then((response) => response.json())
      .then(() => {
        fetchWatchlist(); // Refresh the watchlist after adding a show
        setShowIdToAdd('');
      })
      .catch((error) => {
        console.error('Error adding to watchlist: ', error);
      });
  };

  const handleRemoveFromWatchlist = () => {
    if (!showIdToRemove) {
      return;
    }

    fetch('https://academics.newtonschool.co/api/v1/ott/watchlist/like', {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'projectId': hw8byo71fl0m,
      },
      body: JSON.stringify({ showId: showIdToRemove }),
    })
      .then((response) => response.json())
      .then(() => {
        fetchWatchlist(); // Refresh the watchlist after removing a show
        setShowIdToRemove('');
      })
      .catch((error) => {
        console.error('Error removing from watchlist: ', error);
      });
  };

  return (
    <div>
      <h2>Watchlist</h2>
      <div>
        <label>
          Add Show to Watchlist:
          <input
            type="text"
            value={showIdToAdd}
            onChange={(e) => setShowIdToAdd(e.target.value)}
          />
          <button onClick={handleAddToWatchlist}>Add</button>
        </label>
      </div>
      <div>
        <label>
          Remove Show from Watchlist:
          <input
            type="text"
            value={showIdToRemove}
            onChange={(e) => setShowIdToRemove(e.target.value)}
          />
          <button onClick={handleRemoveFromWatchlist}>Remove</button>
        </label>
      </div>
      <div>
        <h3>My Watchlist:</h3>
        <ul>
          {watchlist.map((show) => (
            <li key={show.id}>{show.name}</li>
            // Display other show information as needed
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Watchlist;
