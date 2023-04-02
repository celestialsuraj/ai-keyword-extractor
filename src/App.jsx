import {useState } from 'react';
import React from "react";
import { Container, Box} from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";

const App = () => {
  const extractKeywords = (text) => {
    console.log(text);
  };

  return (
    <>
      <Box bg="blue.500" color="white" height="100vh" paddingTop={100}>
        <Container maxW="3xl" centerContent>
          <Header />
          <TextInput extractKeywords={extractKeywords} />
          <Footer />
        </Container>
      </Box>
    </>
  );
};

export default App;
