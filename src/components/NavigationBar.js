import React from 'react';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/tv-shows">TV Shows</a></li>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/signup">Sign Up</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
