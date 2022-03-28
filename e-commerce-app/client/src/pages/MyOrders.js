import React from "react";
import {useParams} from "react-router-dom";
import Header from "../components/Header";

function MyOrders() {
  const {user_id} = useParams();
  return <Header />;
}

export default MyOrders;
