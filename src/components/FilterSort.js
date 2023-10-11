// FilterSort.js
import React, { useState, useEffect } from 'react';

function FilterSort({ projectId }) {
  const [filteredShows, setFilteredShows] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    // Fetch the initial list of shows when the component mounts
    fetchFilteredShows();
  }, []);

  const fetchFilteredShows = () => {
    const filterQuery = {
      type: selectedGenre, // Change this to the desired filter criteria
    };

    // Add sorting criteria if needed
    if (sortBy) {
      filterQuery.sortBy = sortBy;
    }

    fetch(`https://academics.newtonschool.co/api/v1/ott/show?filter=${JSON.stringify(filterQuery)}`, {
      method: 'GET',
      headers: {
        projectId: hw8byo71fl0m,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFilteredShows(data);
      })
      .catch((error) => {
        console.error('Error fetching filtered shows: ', error);
      });
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleApplyFilter = () => {
    fetchFilteredShows();
  };

  return (
    <div>
      <h2>Filter and Sort Content</h2>
      <div>
        <label>
          Filter by Genre:
          <select value={selectedGenre} onChange={handleGenreChange}>
            <option value="">All Genres</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
            {/* Add more genre options as needed */}
          </select>
        </label>
      </div>
      <div>
        <label>
          Sort by:
          <select value={sortBy} onChange={handleSortChange}>
            <option value="">None</option>
            <option value="name">Name (A-Z)</option>
            <option value="-name">Name (Z-A)</option>
            {/* Add more sorting options as needed */}
          </select>
        </label>
      </div>
      <button onClick={handleApplyFilter}>Apply Filter</button>
      <div>
        {/* Display the filtered shows here */}
        {filteredShows.map((show) => (
          <div key={show.id}>{show.name}</div>
          // Display other show information as needed
        ))}
      </div>
    </div>
  );
}

export default FilterSort;
