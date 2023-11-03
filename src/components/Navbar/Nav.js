import React, { useEffect } from "react";
import { useState, useRef } from "react";
import {
  Container,
  Flex,
  UnorderedList,
  ListItem,
  Button,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, Link, useLocation } from "react-router-dom";

import Zee from "../../Assets/ZEE5_logo.png";
import AppsIcon from "@mui/icons-material/Apps";
import { AiOutlineUser, AiOutlineRight } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/react";
import { BiSolidCrown } from "react-icons/bi";
import SearchCard from "../SearchCard";

export default function Nav({ isLoggedIn, setIsLoggedIn, username }) {
  const searchStyle = {
    bg: "#0F0617",
    color: "white",
    width: "220px",
    height: "35px",
    pl: "40px",
    border: "1px solid grey",
    borderRadius: "5px",
  };

  const location = useLocation();

  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const [option, setIsOption] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [smallerScreen, setSmallerScreen] = useState(window.innerWidth < 1000);

  const toogleRef = useRef(null);
  const menuRef = useRef(null);

  const navLinkStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2px solid white" : "none",
    };
  };

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropdownOpen);
  };

  const handleOption = () => {
    setIsOption(!option);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (toogleRef.current && !toogleRef.current.contains(e.target)) {
        setIsDropDownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleLogout = () => {
    localStorage.removeItem("sign");
    setIsLoggedIn(false);
  };

  const clearSearchValue = () => {
    setSearchData("");
  };

  const handleSearchInputChange = (event) => {
    const userInput = event.target.value;
    setSearchData(userInput);
    setShowSuggestions(userInput.length > 0);
  };

  useEffect(() => {
    const handleResize = () => {
      setSmallerScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (
    location.pathname === "/Login" ||
    location.pathname === "/BuyPlan" ||
    location.pathname === "/Register"
  ) {
    return null;
  }

  return (
    <>
      {smallerScreen ? (
        <Container
          style={{ zIndex: "10000" }}
          p="10px"
          bg="#0F0617"
          color="white"
          position="fixed"
          top="0"
          minWidth="99%"
        >
          <Flex justifyContent="space-between" alignItems={"center"}>
            <Flex alignItems={"center"}>
              <img
                src={Zee}
                alt="zee logo"
                style={{ width: "50px", marginLeft: "20px", height: "50px" }}
              />

              <NavLink to="/BuyPlan">
                <Button className="BuyPlanButton">
                  <BiSolidCrown
                    style={{
                      paddingRight: "5px",
                      fontSize: "16px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  />
                  BUY PLAN
                </Button>
              </NavLink>
            </Flex>
            <Flex>
              <NavLink
                to="/SearchCard"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Box className="searchBtn">
                  <SearchIcon />
                </Box>
              </NavLink>
            </Flex>
            <div>
              <HamburgerIcon
                className="Hmenu"
                ref={menuRef}
                onClick={handleMenuToggle}
                fontSize={24}
                cursor="pointer"
                textDecoration="none"
                color="white"
              />
            </div>
          </Flex>

          <Flex
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",

              width: "100vw",
              paddingBottom: "5px",
            }}
            alignItems={"center"}
          >
            <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
              <Container className="navButton">Home</Container>
            </NavLink>
            <NavLink
              to="/TvShows"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">TV Shows</Container>
            </NavLink>
            <NavLink
              to="/Movies"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Movies</Container>
            </NavLink>
            <NavLink
              to="/WebSeries"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Web Series</Container>
            </NavLink>
            <NavLink
              to="/Premium"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Premium</Container>
            </NavLink>
            <NavLink
              to="/News"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">News</Container>
            </NavLink>
            <NavLink
              to="/Music"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Music</Container>
            </NavLink>
            <NavLink
              to="/Live"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Live</Container>
            </NavLink>
            <NavLink
              to="/Channels"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Channels</Container>
            </NavLink>
            <NavLink
              to="/Kids"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Kids</Container>
            </NavLink>
            <NavLink
              to="/Eduaruaa"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">Eduaruaa</Container>
            </NavLink>
            <NavLink
              to="/WatchList"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Container className="navButton">My List</Container>
            </NavLink>
          </Flex>

          {menuOpen && (
            <div className="menu">
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div
                  style={{
                    paddingLeft: "50px",
                    fontWeight: "bold",
                    paddingBottom: "20px",
                    paddingTop: "20px",
                    marginBottom: "20px",
                    backgroundColor: "rgba(41, 37, 45, 0.6)",
                    borderRadius: "10px",
                  }}
                >
                  Home
                </div>
              </NavLink>
              <hr className="divider" />
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      style={{
                        backgroundColor: "#0F0617",
                        border: "none",
                      }}
                    >
                      <Box
                        flex="1"
                        style={{
                          backgroundColor: "#0F0617",
                          marginLeft: "25px",
                          color: "grey",
                          fontSize: "15px",
                          textAlign: "left",
                          fontFamily: "Noto Sans, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Explore
                      </Box>
                      <AccordionIcon style={{ color: "white" }} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul className="ProfileList">
                      <NavLink
                        to="/TvShows"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Tv Shows
                        </li>
                      </NavLink>
                      <NavLink
                        to="/Movies"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Movies
                        </li>
                      </NavLink>
                      <NavLink
                        to="/NoResult"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Premium
                        </li>
                      </NavLink>
                      <NavLink
                        to="/AllShows"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Web Series
                        </li>
                      </NavLink>
                      <NavLink
                        to="/NoResult"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          News
                        </li>
                      </NavLink>
                      <NavLink
                        to="/NoResult"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Music
                        </li>
                      </NavLink>
                      <NavLink
                        to="/NoResult"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Kids
                        </li>
                      </NavLink>
                      <NavLink
                        to="/NoResult"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Songs
                        </li>
                      </NavLink>
                      <NavLink
                        to="/NoResult"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Video
                        </li>
                      </NavLink>
                      <NavLink
                        to="/NoResult"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Channels
                        </li>
                      </NavLink>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <hr className="divider" />
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      style={{
                        backgroundColor: "#0F0617",
                        border: "none",
                      }}
                    >
                      <Box
                        flex="1"
                        style={{
                          backgroundColor: "#0F0617",
                          marginLeft: "25px",
                          color: "grey",
                          fontSize: "15px",
                          textAlign: "left",
                          fontFamily: "Noto Sans, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Settings
                      </Box>
                      <AccordionIcon style={{ color: "white" }} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul className="ProfileList">
                      <NavLink
                        to="/NoResult"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Parental Control
                        </li>
                      </NavLink>
                      <NavLink
                        to="/NoResult"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Activate TV
                        </li>
                      </NavLink>
                      <NavLink
                        to="/NoResult"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Reset Settings to default
                        </li>
                      </NavLink>
                      <hr className="divider" />
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <NavLink
                to="/NoResult"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div
                  style={{
                    paddingLeft: "50px",
                    fontWeight: "bold",
                    paddingBottom: "20px",
                    paddingTop: "20px",
                    marginBottom: "20px",
                    ":hover": {
                      backgroundColor: "rgba(41, 37, 45, 0.6)",
                    },
                    borderRadius: "10px",
                  }}
                >
                  Refer and earn Discount
                </div>
              </NavLink>
              <hr className="divider" />
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      style={{
                        backgroundColor: "#0F0617",
                        border: "none",
                      }}
                    >
                      <Box
                        flex="1"
                        style={{
                          backgroundColor: "#0F0617",
                          marginLeft: "25px",
                          color: "grey",
                          fontSize: "15px",
                          textAlign: "left",
                          fontFamily: "Noto Sans, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Info
                      </Box>
                      <AccordionIcon style={{ color: "white" }} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <ul className="ProfileList">
                      <NavLink
                        to="/AboutUs"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          About us
                        </li>
                      </NavLink>
                      <NavLink
                        to="/TermOfUse"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Term of Use
                        </li>
                      </NavLink>
                      <NavLink
                        to="/NoResult"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <li
                          className="profileItem"
                          style={{ paddingLeft: "35px" }}
                        >
                          Privacy Policy
                        </li>
                      </NavLink>
                      <hr className="divider" />
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <div
                style={{
                  fontSize: "11px",
                  color: "grey",
                  paddingLeft: "130px",
                  paddingBottom: "30px",
                }}
              >
                Version 3.14.4
              </div>
            </div>
          )}
        </Container>
      ) : (
        <>
          <Container
            p="10px"
            bg="#0F0617"
            color="white"
            position="fixed"
            top="0"
            minWidth="99%"
            zIndex="10000"
          >
            <Flex
              as="nav"
              alignItems="center"
              color="white"
              justifyContent="space-between"
              padding={"0 20px"}
            >
              <Flex alignItems="center">
                <img
                  src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.40"
                  alt="zee logo"
                  style={{ width: "50px", height: "50px" }}
                />
                <UnorderedList
                  style={{ listStyleType: "none", display: "flex" }}
                >
                  <NavLink to="/" style={navLinkStyle} className="navLink">
                    <ListItem>Home</ListItem>
                  </NavLink>

                  <NavLink
                    to="/TvShows"
                    style={navLinkStyle}
                    className="navLink"
                  >
                    <ListItem style={{ width: "80px" }}>TV Shows</ListItem>
                  </NavLink>

                  <NavLink
                    to="/Movies"
                    style={navLinkStyle}
                    className="navLink"
                  >
                    <ListItem>Movies</ListItem>
                  </NavLink>
                  <NavLink
                    to="/Premium"
                    style={navLinkStyle}
                    className="navLink"
                  >
                    <ListItem>Premium</ListItem>
                  </NavLink>
                  <NavLink
                    to="/WebSeries"
                    style={navLinkStyle}
                    className="navLink"
                  >
                    <ListItem>Web Series</ListItem>
                  </NavLink>

                  <ListItem onClick={toggleDropDown}>
                    <div className="AppsIcon" ref={toogleRef}>
                      <AppsIcon />
                    </div>
                    {isDropdownOpen && (
                      <div
                        style={{
                          position: "absolute",
                          marginTop: "20px",
                          backgroundColor: "#0F0617",
                          width: "200px",
                          overscrollBehavior: "none",
                        }}
                      >
                        <ul
                          className="ul"
                          style={{ overscrollBehavior: "none" }}
                        >
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">News</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Eduaruaa</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Live TV</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Music</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Sports</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Rent</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Kids</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Songs</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Videos</li>
                          </NavLink>
                          <NavLink
                            to="/NoResult"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <li className="listItem">Channels</li>
                          </NavLink>

                          <br />
                        </ul>
                      </div>
                    )}
                  </ListItem>
                </UnorderedList>
              </Flex>

              <Flex style={{ maxWidth: "150%" }}>
                <Box
                  style={{
                    marginRight: "30px",
                    backgroundColor: "#0F0617",
                    marginTop: "2px",
                  }}
                >
                  <InputGroup>
                    <Input
                      value={searchData}
                      onChange={handleSearchInputChange}
                      type="text"
                      placeholder="Search for Movies, Shows, Channels etc"
                      sx={searchStyle}
                    />
                    {showSuggestions && (
                      <SearchCard
                        searchData={searchData}
                        clearSearchValue={clearSearchValue}
                      />
                    )}
                    <InputLeftElement>
                      {/* <Link to="/SearchResult"> */}
                      <SearchIcon
                        sx={{
                          cursor: "pointer",
                          color: "white",
                          padding: "10px",
                        }}
                      />
                      {/* </ Link> */}
                    </InputLeftElement>
                  </InputGroup>
                </Box>
                {isLoggedIn ? (
                  <div style={{ marginTop: "2px" }}>
                    <div class="icon-container">
                      <AiOutlineUser
                        className="icon"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          marginRight: "40px",
                          marginTop: "5px",
                        }}
                        onClick={handleOption}
                      />{" "}
                      <div class="tooltip">My Profile</div>
                    </div>
                    {option && (
                      <>
                        <div className="overlay" onClick={handleOption}></div>
                        <div
                          style={{
                            position: "absolute",
                            zIndex: "1000",
                            paddingLeft: "0",
                            marginTop: "5px",
                            backgroundColor: "#0F0617",
                            ":hover": { backgroundColor: "purple" },
                          }}
                        >
                          <ul
                            style={{
                              listStyleType: "none",
                              position: "fixed",
                              backgroundColor: "#0F0617",
                              width: "260px",
                              borderRadius: "5px",
                              transform: "translateX(-30%)",
                              paddingLeft: "30px",
                            }}
                          >
                            <li className="listItem listItem1">
                              <Link
                                to="/Profile"
                                style={{
                                  textDecoration: "none",
                                  color: "grey",
                                  display: "flex",
                                }}
                              >
                                <CiUser
                                  style={{
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    backgroundColor: "rgb(90, 90, 90)",
                                    width: "25px",
                                    height: "25px",
                                    borderRadius: "50%",
                                  }}
                                />
                                <div> {username} </div>
                                <AiOutlineRight
                                  style={{
                                    marginLeft: "40px",
                                    marginTop: "0px",
                                    color: "#8230c6",
                                    fontSize: "25px",
                                  }}
                                />
                              </Link>
                            </li>

                            <Accordion
                              defaultIndex={[0]}
                              allowMultiple
                              style={{ zIndex: 1000 }}
                            >
                              <AccordionItem>
                                <h2>
                                  <AccordionButton
                                    style={{
                                      backgroundColor: "#0F0617",
                                      border: "none",
                                    }}
                                  >
                                    <Box
                                      flex="1"
                                      style={{
                                        backgroundColor: "#0F0617",
                                        marginLeft: "5px",
                                        color: "grey",
                                        fontSize: "15px",
                                        textAlign: "left",
                                        fontFamily: "Noto Sans, sans-serif",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      My Account
                                    </Box>
                                    <AccordionIcon style={{ color: "white" }} />
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                  <ul className="ProfileList">
                                    <NavLink
                                      to="/Watchlist"
                                      style={{
                                        textDecoration: "none",
                                        color: "white",
                                      }}
                                    >
                                      <li className="profileItem">
                                        My WatchList
                                      </li>
                                    </NavLink>
                                    <NavLink
                                      to="/Subscription"
                                      style={{
                                        textDecoration: "none",
                                        color: "white",
                                      }}
                                    >
                                      <li className="profileItem">
                                        My Subscription
                                      </li>
                                    </NavLink>
                                    <NavLink
                                      to="/NoResult"
                                      style={{
                                        textDecoration: "none",
                                        color: "white",
                                      }}
                                    >
                                      <li className="profileItem">
                                        My Rentals
                                      </li>
                                    </NavLink>
                                    <NavLink
                                      to="/NoResult"
                                      style={{
                                        textDecoration: "none",
                                        color: "white",
                                      }}
                                    >
                                      <li className="profileItem">
                                        My Transactions
                                      </li>
                                    </NavLink>
                                    <NavLink
                                      to="/NoResult"
                                      style={{
                                        textDecoration: "none",
                                        color: "white",
                                      }}
                                    >
                                      <li className="profileItem">
                                        Manage your devices
                                      </li>
                                    </NavLink>
                                    <li
                                      onClick={() => handleLogout()}
                                      className="profileItem"
                                    >
                                      Logout
                                    </li>
                                    <hr
                                      style={{
                                        marginLeft: "0",
                                        width: "100%",
                                        color: "grey",
                                      }}
                                    />
                                    <li
                                      style={{
                                        fontSize: "11px",
                                        color: "grey",
                                        paddingLeft: "50px",
                                      }}
                                    >
                                      Version 3.14.4
                                    </li>
                                  </ul>
                                </AccordionPanel>
                              </AccordionItem>
                            </Accordion>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  // Conditionally render the login button
                  <NavLink to="/Login">
                    <Button
                      className="login-btn"
                      mr={30}
                      sx={{
                        bg: "#0F0617",
                        padding: "8px",
                        color: "white",
                        width: "70px",
                        border: "1px white solid",
                        height: "36px",
                        borderRadius: "5px",
                        fontSize: "Bold",
                        cursor: "pointer",
                        marginTop: "2px",
                        transition: "background-color .3s ease-in-out",
                      }}
                    >
                      Login
                    </Button>
                  </NavLink>
                )}
                <NavLink to="/BuyPlan">
                  <Button
                    mr={30}
                    sx={{
                      marginTop: "2px",
                      bg: "#8230c6",
                      color: "white",
                      border: "1px #8230c6 solid",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      width: "120px",
                      height: "36px",
                      cursor: "pointer",
                      ":hover": {
                        backgroundColor: "#4B0082",
                        border: "1px #4B0082 solid",
                      },
                    }}
                  >
                    <BiSolidCrown
                      style={{ paddingRight: "5px", fontSize: "20px" }}
                    />{" "}
                    BUY PLAN
                  </Button>
                </NavLink>

                <HamburgerIcon
                  ref={menuRef}
                  onClick={handleMenuToggle}
                  fontSize={25}
                  cursor="pointer"
                  textDecoration="none"
                  color="white"
                  marginTop="5px"
                />
                {menuOpen && (
                  <div className="menu">
                    <NavLink
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <div
                        style={{
                          paddingLeft: "50px",
                          fontWeight: "bold",
                          paddingBottom: "20px",
                          paddingTop: "20px",
                          marginBottom: "20px",
                          backgroundColor: "rgba(41, 37, 45, 0.6)",
                          borderRadius: "10px",
                        }}
                      >
                        Home
                      </div>
                    </NavLink>
                    <hr className="divider" />
                    <Accordion defaultIndex={[0]} allowMultiple>
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            style={{
                              backgroundColor: "#0F0617",
                              border: "none",
                            }}
                          >
                            <Box
                              flex="1"
                              style={{
                                backgroundColor: "#0F0617",
                                marginLeft: "25px",
                                color: "grey",
                                fontSize: "15px",
                                textAlign: "left",
                                fontFamily: "Noto Sans, sans-serif",
                                fontWeight: "bold",
                              }}
                            >
                              Explore
                            </Box>
                            <AccordionIcon style={{ color: "white" }} />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <ul className="ProfileList">
                            <NavLink
                              to="/TvShows"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Tv Shows
                              </li>
                            </NavLink>
                            <NavLink
                              to="/Movies"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Movies
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Premium
                              </li>
                            </NavLink>
                            <NavLink
                              to="/AllShows"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Web Series
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                News
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Music
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Kids
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Songs
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Video
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Channels
                              </li>
                            </NavLink>
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    <hr className="divider" />
                    <Accordion defaultIndex={[0]} allowMultiple>
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            style={{
                              backgroundColor: "#0F0617",
                              border: "none",
                            }}
                          >
                            <Box
                              flex="1"
                              style={{
                                backgroundColor: "#0F0617",
                                marginLeft: "25px",
                                color: "grey",
                                fontSize: "15px",
                                textAlign: "left",
                                fontFamily: "Noto Sans, sans-serif",
                                fontWeight: "bold",
                              }}
                            >
                              Settings
                            </Box>
                            <AccordionIcon style={{ color: "white" }} />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <ul className="ProfileList">
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Parental Control
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Activate TV
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Reset Settings to default
                              </li>
                            </NavLink>
                            <hr className="divider" />
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    <NavLink
                      to="/NoResult"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <div
                        style={{
                          paddingLeft: "50px",
                          fontWeight: "bold",
                          paddingBottom: "20px",
                          paddingTop: "20px",
                          marginBottom: "20px",
                          ":hover": {
                            backgroundColor: "rgba(41, 37, 45, 0.6)",
                          },
                          borderRadius: "10px",
                        }}
                      >
                        Refer and earn Discount
                      </div>
                    </NavLink>
                    <hr className="divider" />
                    <Accordion defaultIndex={[0]} allowMultiple>
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            style={{
                              backgroundColor: "#0F0617",
                              border: "none",
                            }}
                          >
                            <Box
                              flex="1"
                              style={{
                                backgroundColor: "#0F0617",
                                marginLeft: "25px",
                                color: "grey",
                                fontSize: "15px",
                                textAlign: "left",
                                fontFamily: "Noto Sans, sans-serif",
                                fontWeight: "bold",
                              }}
                            >
                              Info
                            </Box>
                            <AccordionIcon style={{ color: "white" }} />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <ul className="ProfileList">
                            <NavLink
                              to="/AboutUs"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                About us
                              </li>
                            </NavLink>
                            <NavLink
                              to="/TermOfUse"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Term of Use
                              </li>
                            </NavLink>
                            <NavLink
                              to="/NoResult"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <li
                                className="profileItem"
                                style={{ paddingLeft: "35px" }}
                              >
                                Privacy Policy
                              </li>
                            </NavLink>
                            <hr className="divider" />
                          </ul>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "grey",
                        paddingLeft: "130px",
                        paddingBottom: "30px",
                      }}
                    >
                      Version 3.14.4
                    </div>
                  </div>
                )}
              </Flex>
            </Flex>
          </Container>
        </>
      )}
    </>
  );
}