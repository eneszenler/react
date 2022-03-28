import React from "react";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import {fetchOrder} from "../../../api";

function OrdersDetail() {
  const {order_id} = useParams();
  const {isLoading, isError, data, error} = useQuery(["admin:orders", order_id], () =>
    fetchOrder(order_id)
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error {error.message}.</div>;
  }

  console.log(data);

  return <div>OrdersDetail</div>;
}

export default OrdersDetail;
