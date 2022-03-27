import React from "react";
import Header from "../../components/Header";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";

import {Box, Alert, Button, Container, Stack} from "@chakra-ui/react";
import {Link, Routes, Route, Outlet} from "react-router-dom";

function Panel() {
  return (
    <>
      <Header />

      <div>
        <Alert status="error" spacing={4}>
          <Container maxW="container.xl">
            <Stack direction="row" spacing={4} align="center">
              <Link to={""}>
                <Button>Home</Button>
              </Link>
              <Link to={`products`}>
                <Button>Products</Button>
              </Link>
              <Link to={`orders`}>
                <Button>Orders</Button>
              </Link>
            </Stack>
          </Container>
        </Alert>
      </div>
      <Container maxW="container.xl">
        <Box>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default Panel;
