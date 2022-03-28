import React from "react";

import {useQuery} from "react-query";
import {fetchOrders} from "../../../api";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Heading,
  Button,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";

function Orders() {
  const {isLoading, isError, data} = useQuery("admin:orders", fetchOrders);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error {Error.message}</div>;
  }

  console.log(data);

  return (
    <div>
      <Heading mt={10}>Orders</Heading>
      <Table variant="simple" mt={5} size="sm" backgroundColor="#fff">
        <TableCaption>Orders</TableCaption>
        <Thead>
          <Tr>
            <Th>Order Items</Th>
            <Th>Address</Th>
            <Th>Items</Th>
            <Th style={{textAlign: "right"}}>Order Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((item, i) => {
              return (
                <Tr key={i}>
                  <Td>{item.user.email}</Td>
                  <Td>{item.address}</Td>
                  <Td>{item.items.length}</Td>
                  <Td style={{textAlign: "right"}}>
                    <Link to={`/panel/orders/${item._id}`}>
                      <Button bg="#FF2E63" color="#fff">
                        Detail
                      </Button>
                    </Link>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </div>
  );
}

export default Orders;
