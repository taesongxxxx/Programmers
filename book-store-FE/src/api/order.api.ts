import { Order, OrderDetailItem, OrederSheet } from "../models/order.model";
import { httpClient, requestHandler } from "./http";

export const order = async (orderData: OrederSheet) => {
  return await requestHandler<OrederSheet>("post", "/orders", orderData);
}

export const fetchOrders = async () => {
  return await requestHandler<OrederSheet>("get", "/orders");
}

export const fetchOrder = async (orderId: number) => {
  return await requestHandler<OrederSheet>("get", `/orders/${orderId}`);
}