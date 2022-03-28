import express from "express";
const router = express.Router();

import Order from "../controllers/order";

router.post("/", Order.Create);
router.get("/", Order.List);
router.get("/my-orders/:user_id", Order.GetMyOrders);

export default router;
