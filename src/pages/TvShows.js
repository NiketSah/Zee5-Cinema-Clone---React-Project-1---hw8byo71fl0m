import { Container, Box, Flex, Button, border } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import ComponentCard from "../components/ComponentCard";
import Footer from "../components/Footer";
import React from "react";
import ImageSlider from "../components/ImageSlider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FetchContext from "../FetchContext";

export default function TvShows() {
  const [smallerScreen, setSmallerScreen] = useState(window.innerWidth < 500);

  const { apiData } = useContext(FetchContext);

  useEffect(() => {
    const handleResize = () => {
      setSmallerScreen(window.innerWidth < 500);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderComponentCards = (data) => {
    if (!Array.isArray(data)) {
      return null;
    }

    return (
      <Flex
        sx={{
          overflowX: "scroll",
          overflowY: "scroll",
          "&::-webkit-scrollbar": { width: "1px" },
        }}
      >
        {data.slice(0, 10).map((item) => (
          <ComponentCard key={item._id} item={item} />
        ))}
      </Flex>
    );
  };

  return (
    <>
      {smallerScreen ? (
        <Container style={{ marginTop: "5rem" }}>
          <Container>
            <ImageSlider />
          </Container>
          <Container style={{ marginLeft: "10px" }}>
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                }}
              >
                ZEE5 Exclusives
              </Box>
              <Link
                to="/AllShows"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter(
                (item) => item.type === "tv show" || item.type === "web series"
              )
            )}
          </Container>

          <Container style={{ marginLeft: "10px" }}>
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                }}
              >
                Action Shows
              </Box>
              <Link
                to="/AllShows"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter(
                (item) =>
                  (item.type === "tv show" || item.type === "web series") &&
                  (item.keywords.includes("action") ||
                    item.keywords.includes("thriller") ||
                    item.keywords.includes("sci-fi"))
              )
            )}
          </Container>

          <Container style={{ marginLeft: "10px" }}>
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                }}
              >
                Comedy Shows
              </Box>
              <Link
                to="/AllShows"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter(
                (item) =>
                  (item.type === "tv show" || item.type === "web series") &&
                  (item.keywords.includes("horror") ||
                    item.keywords.includes("darkness") ||
                    item.keywords.includes("betrayal"))
              )
            )}
          </Container>

          <Container style={{ marginLeft: "10px" }}>
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                }}
              >
                Romantic Shows
              </Box>
              <Link
                to="/AllShows"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter(
                (item) =>
                  (item.type === "tv show" || item.type === "web series") &&
                  (item.keywords.includes("romance") ||
                    item.keywords.includes("love") ||
                    item.keywords.includes("fantasy"))
              )
            )}
          </Container>
          <Container style={{ marginLeft: "10px" }}>
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "15px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                }}
              >
                Horror Shows
              </Box>
              <Link
                to="/AllShows"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                    fontSize: "12px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter(
                (item) =>
                  (item.type === "tv show" || item.type === "web series") &&
                  (item.keywords.includes("drama") ||
                    item.keywords.includes("comedy") ||
                    item.keywords.includes("epic"))
              )
            )}
          </Container>
        </Container>
      ) : (
        <Container style={{ marginTop: "8rem" }}>
          <Container>
            <ImageSlider />
          </Container>
          <Container style={{ marginLeft: "40px", marginTop: "30px" }}>
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "20px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "20px",
                  letterSpacing: "1px",
                  marginBottom: 0,
                }}
              >
                ZEE5 Exclusives
              </Box>
              <Link
                to="/AllShows"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "30px",
                    paddingRight: "10px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter(
                (item) => item.type === "tv show" || item.type === "web series"
              )
            )}
          </Container>

          <Container style={{ marginLeft: "40px", marginTop: "40px" }}>
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "20px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "20px",
                  letterSpacing: "1px",
                  marginBottom: 0,
                }}
              >
                Action Shows
              </Box>
              <Link
                to="/AllShows"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter(
                (item) =>
                  (item.type === "tv show" || item.type === "web series") &&
                  (item.keywords.includes("action") ||
                    item.keywords.includes("thriller") ||
                    item.keywords.includes("sci-fi"))
              )
            )}
          </Container>

          <Container style={{ marginLeft: "40px", marginTop: "40px" }}>
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "20px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "20px",
                  letterSpacing: "1px",
                  marginBottom: 0,
                }}
              >
                Comedy Shows
              </Box>
              <Link
                to="/AllShows"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter(
                (item) =>
                  (item.type === "tv show" || item.type === "web series") &&
                  (item.keywords.includes("comedy") ||
                    item.keywords.includes("drama") ||
                    item.keywords.includes("darkness"))
              )
            )}
          </Container>

          <Container style={{ marginLeft: "40px", marginTop: "40px" }}>
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "20px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "20px",
                  letterSpacing: "1px",
                  marginBottom: 0,
                }}
              >
                Romantic Shows
              </Box>
              <Link
                to="/AllShows"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter(
                (item) =>
                  (item.type === "tv show" || item.type === "web series") &&
                  (item.keywords.includes("romance") ||
                    item.keywords.includes("love") ||
                    item.keywords.includes("betrayal"))
              )
            )}
          </Container>
          <Container style={{ marginLeft: "40px" }}>
            <Flex style={{ justifyContent: "space-between" }}>
              <Box
                as="p"
                sx={{
                  fontSize: "20px",
                  color: "white",
                  fontFamily: "Arial",
                  marginLeft: "20px",
                  letterSpacing: "1px",
                  marginBottom: 0,
                }}
              >
                Horror Shows
              </Box>
              <Link
                to="/AllShows"
                style={{ textDecoration: "none", color: "#a785ff" }}
              >
                <Box
                  style={{
                    color: "#a785ff",
                    paddingTop: "15px",
                    paddingRight: "10px",
                  }}
                >
                  More <ChevronRightIcon style={{ fontSize: "15px" }} />{" "}
                </Box>
              </Link>
            </Flex>
            {renderComponentCards(
              apiData.filter(
                (item) =>
                  (item.type === "tv show" || item.type === "web series") &&
                  (item.keywords.includes("horror") ||
                    item.keywords.includes("thriller") ||
                    item.keywords.includes("darkness"))
              )
            )}
          </Container>
        </Container>
      )}

      <Footer />
    </>
  );
}
