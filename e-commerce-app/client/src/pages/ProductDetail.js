import React from "react";

import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import {Box, Text, Button, Container, Flex, Heading} from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";

import {fetchProduct} from "../api";
import Header from "../components/Header";
import moment from "moment";
import {useBasket} from "../contexts/BasketContext";

function ProductDetail() {
  const {product_id} = useParams();
  const {addToBasket, items} = useBasket();

  const {isLoading, isError, data} = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error.</div>;
  }

  const findBasketItem = items.find((item) => item._id === product_id);
  const images = data.photos.map((url) => ({original: url}));
  return (
    <>
      <Header />
      <Container maxW="container.xl" marginTop="20px">
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p="3"
          bg="#fff"
          textAlign="center"
        >
          <Flex justifyContent="space-between">
            <Box width="60%">
              <ImageGallery items={images} showThumbnails={false} width="100%" />
            </Box>
            <Flex
              flexDirection="column"
              width="40%"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="2xl">
                <Heading>{data.title}</Heading>
              </Text>
              <p>{data.description}</p>
              <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
              <Button
                bg={findBasketItem ? "#08D9D6" : "#FF2E63"}
                color="#fff"
                width="60%"
                onClick={() => addToBasket(data, findBasketItem)}
              >
                {findBasketItem ? "Remove from basket" : "Add Basket"}
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  );
}

export default ProductDetail;
