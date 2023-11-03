import React from "react";
import ComponentCard from "../components/ComponentCard";
import { Flex } from "@chakra-ui/react";

import FetchContext from "../FetchContext";
import { useContext } from "react";

export default function AllTrailer() {
  const { apiData } = useContext(FetchContext);

  return (
    <div style={{ marginTop: "6rem", marginLeft: "40px" }}>
      <h1 style={{ color: "white", letterSpacing: "1px" }}>Short Movies</h1>
      <Flex style={{ flexWrap: "wrap" }}>
        {apiData
          .filter((drama) => {
            return drama.type === "trailer";
          })
          .map((trailer) => (
            <ComponentCard key={trailer._id} item={trailer} />
          ))}
      </Flex>
    </div>
  );
}
