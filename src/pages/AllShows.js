import React, { useContext } from "react";
import ComponentCard from "../components/ComponentCard";
import { Flex } from "@chakra-ui/react";
import FetchContext from "../FetchContext";

export default function AllShows() {
  const { apiData } = useContext(FetchContext);

  return (
    <div style={{ marginTop: "6rem", marginLeft: "40px" }}>
      <h1 style={{ color: "white" }}>Top Shows</h1>
      <Flex style={{ flexWrap: "wrap" }}>
        {apiData
          .filter((drama) => {
            return drama.type === "tv show";
          })
          .map((tvshow) => (
            <ComponentCard key={tvshow._id} item={tvshow} />
          ))}
      </Flex>
    </div>
  );
}
