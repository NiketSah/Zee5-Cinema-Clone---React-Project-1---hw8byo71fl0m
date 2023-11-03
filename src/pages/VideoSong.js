import { Container, Box, Flex, Button, border } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";
// import {useEffect, useState} from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import ComponentCard from "../components/ComponentCard";
import Footer from "../components/Footer";
import React from "react";
import FetchContext from "../FetchContext";

export default function VideoSong() {
  const { apiData } = useContext(FetchContext);

  return (
    <Container style={{ marginLeft: "30px" }}>
      <Box
        as="p"
        sx={{
          fontSize: "20px",
          fontWeight: "Bold",
          color: "white",
          fontFamily: "sans-serif",
          marginLeft: "20px",
          letterSpacing: "1px",
        }}
      >
        Recommendations For You
      </Box>
      <Flex style={{ flexWrap: "wrap" }}>
        {apiData
          .filter((drama) => drama.type === "video song")
          .slice(0, 4)
          .map((VideoSong) => (
            <ComponentCard key={VideoSong._id} item={VideoSong} />
          ))}
      </Flex>
    </Container>
  );
}
