import type { NextPage } from "next";

import { Content } from "../components/Content";
import { Sidebar } from "../components/Sidebar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;


const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </>
  );
};

export default Home;
