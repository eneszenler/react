import {Alert, AlertDescription, AlertIcon, AlertTitle} from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

function Error404() {
  return (
    <>
      <Header />
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Error 404</AlertTitle>
        <AlertDescription>This page is not exist</AlertDescription>
      </Alert>
    </>
  );
}

export default Error404;
