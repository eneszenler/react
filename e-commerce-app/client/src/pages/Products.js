import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";

import {Button, Grid, Flex, Container} from "@chakra-ui/react";
import {useInfiniteQuery} from "react-query";
import {fetchProductList} from "../api";

function Products() {
  const {error, data, fetchNextPage, hasNextPage, isFetchingNextPage, status} =
    useInfiniteQuery("products", fetchProductList, {
      getNextPageParam: (lastGroup, allgroups) => {
        const morePagesExist = lastGroup?.length === 12;
        if (!morePagesExist) {
          return;
        }
        return allgroups.length + 1;
      },
    });

  if (status === "loading") return "Loading...";

  if (status === "error") return "An error has occurred: " + error.message;

  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(3,1fr)" gap={4}>
          {data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.map((item, i) => {
                return <Card key={i} item={item} />;
              })}
            </React.Fragment>
          ))}
        </Grid>
        <Flex mt="10" mb="10" justifyContent="center">
          <Button
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage}
            disapled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more.."
              : hasNextPage
              ? "Load More"
              : "Nothing More to Load"}
          </Button>
        </Flex>
      </Container>
    </>
  );
}

export default Products;
