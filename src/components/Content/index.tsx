import React from "react";

import { Container } from "./styles";

import { Header } from "./components/Header";
import { Information } from "./components/Information";
import { Graph } from "./components/Graph";
import { LastOrders } from "./components/LastOrders";

export function Content() {
  return (
    <>
      <Container>
        <Header />
        <Information />
        <Graph />
        <LastOrders />
      </Container>
    </>
  );
}
