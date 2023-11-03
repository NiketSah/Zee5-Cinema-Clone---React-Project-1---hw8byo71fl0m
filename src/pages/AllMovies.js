import { Flex } from "@chakra-ui/react";

import ComponentCard from "../components/ComponentCard";
import FetchContext from "../FetchContext";
import { useContext } from "react";

export default function AllMovies() {
  const { apiData } = useContext(FetchContext);

  return (
    <div style={{ marginTop: "5rem", marginLeft: "40px" }}>
      <h1 style={{ color: "white", marginLeft: "30px" }}>MOVIES</h1>
      <Flex style={{ flexWrap: "wrap" }}>
        {apiData
          .filter((drama) => {
            return drama.type === "movie";
          })
          .map((movie) => (
            <ComponentCard key={movie._id} item={movie} />
          ))}
      </Flex>
    </div>
  );
}
