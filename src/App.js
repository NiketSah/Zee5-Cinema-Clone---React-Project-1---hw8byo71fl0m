import "./App.css";
import { useEffect, useState } from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import { FetchProvider } from "./FetchContext";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import VideoSong from "./pages/VideoSong";
import ShortFilm from "./pages/ShortFilm";
import Watch from "./pages/Watch";
import Watchlist from "./pages/Watchlist";
import SearchResult from "./pages/SearchResult";
import AllMovies from "./pages/AllMovies";
import AllShows from "./pages/AllDocumentries";
import AllTrailer from "./pages/AllTrailer";
import AllDrama from "./pages/AllDrama";
import Transaction from "./pages/Transaction";
import Subscription from "./pages/Subscription";
import Rental from "./pages/Rental";
import AboutUS from "./pages/AboutUS";
import TermOfUse from "./pages/TermOfUse";
import Nav from "./components/Navbar/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import BuyPlan from "./components/BuyPlan";
import NoResult from "./components/NoResult";
import ZeeExclusive from "./pages/ZeeExclusive";
import AllWebSeries from "./pages/AllWebSeries";
import Profile from "./components/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [Email, setEMail] = useState("");

  const setLoggedInStatus = (status) => {
    setIsLoggedIn(status);
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <>
      <FetchProvider>
        <Nav
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          username={userName}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TvShows" element={<TvShows />} />
          <Route path="/Song" element={<VideoSong />} />
          <Route path="/shortfilm" element={<ShortFilm />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/Watchlist" element={<Watchlist />} />
          <Route path="/result/:id" element={<SearchResult />} />
          <Route path="/AllMovies" element={<AllMovies />} />
          <Route path="/AllShows" element={<AllShows />} />
          <Route path="/AllDocumentries" element={<AllShows />} />
          <Route path="/ZeeExclusive" element={<ZeeExclusive />} />
          <Route path="/AllTrailer" element={<AllTrailer />} />
          <Route path="/AllWebSeries" element={<AllWebSeries />} />
          <Route path="/AllDrama" element={<AllDrama />} />

          <Route
            path="/Profile"
            element={<Profile username={userName} email={Email} />}
          />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/Rental" element={<Rental />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/AboutUs" element={<AboutUS />} />
          <Route path="/TermOfUse" element={<TermOfUse />} />
          {/* No need to include Nav for /Login and /Register */}

          <Route
            path="/Login"
            element={
              <Login
                setLoggedInStatus={setLoggedInStatus}
                setUserName={setUserName}
                setEMail={setEMail}
              />
            }
          />
          <Route
            path="/Register"
            element={
              <Register
                setLoggedInStatus={setLoggedInStatus}
                setUserName={setUserName}
                setEMail={setEMail}
              />
            }
          />
          <Route path="/BuyPlan" element={<BuyPlan />} />
          {/*No Results*/}

          <Route path="*" element={<NoResult />} />
        </Routes>
      </FetchProvider>
    </>
  );
}

export default App;
