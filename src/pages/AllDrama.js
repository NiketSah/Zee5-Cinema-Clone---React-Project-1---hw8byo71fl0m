import React from "react";
import ComponentCard from "../components/ComponentCard";
import { Flex } from "@chakra-ui/react";

import { useContext } from "react";
import FetchContext from "../FetchContext";

export default function AllDrama() {
  const { apiData } = useContext(FetchContext);

  return (
    <div style={{ marginTop: "6rem", marginLeft: "40px" }}>
      <h1 style={{ color: "white", letterSpacing: "1px" }}>
        Drama You Can't Miss
      </h1>
      <Flex style={{ flexWrap: "wrap" }}>
        {apiData
          .filter((drama) => {
            return drama.type === "video song";
          })
          .map((drama) => (
            <ComponentCard key={drama._id} item={drama} />
          ))}
      </Flex>
    </div>
  );
}
