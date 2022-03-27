import React from "react";

import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import {Box, Text, Button, Container} from "@chakra-ui/react";
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
      <Container maxW="container.xl">
        <Box margin="10">
          <ImageGallery items={images} showThumbnails={false} />
        </Box>
        <Text as="h2" fontSize="2xl">
          {data.title}
        </Text>
        <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
        <p>{data.description}</p>
        <Button
          bg={findBasketItem ? "#08D9D6" : "#FF2E63"}
          color="#fff"
          onClick={() => addToBasket(data, findBasketItem)}
        >
          {findBasketItem ? "Remove from basket" : "Add Basket"}
        </Button>
      </Container>
    </>
  );
}

export default ProductDetail;
