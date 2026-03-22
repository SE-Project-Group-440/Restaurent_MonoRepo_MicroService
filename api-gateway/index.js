const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors({ origin: "*" }));

// Service URLs - use Docker service names in containers, localhost for local dev
const AUTH_URL = process.env.AUTH_URL || "http://auth:8080";
const RESTAURANT_URL = process.env.RESTAURANT_URL || "http://restaurant:8081";
const ORDER_URL = process.env.ORDER_URL || "http://order:8082";
const PAYMENT_URL = process.env.PAYMENT_URL || "http://payment:8083";
const DELIVERY_URL = process.env.DELIVERY_URL || "http://delivery:8084";
const EMAIL_URL = process.env.EMAIL_URL || "http://email:8085";

const proxy = (target) =>
  createProxyMiddleware({
    target,
    changeOrigin: true,
  });

// Auth Service: /auth/*
app.use("/auth", proxy(AUTH_URL));

// Restaurant & Menu Service: /Restaurent/*, /Menu/*
app.use("/Restaurent", proxy(RESTAURANT_URL));
app.use("/Menu", proxy(RESTAURANT_URL));

// Order Service: /api/order/*, /api/cart/*
app.use("/api/order", proxy(ORDER_URL));
app.use("/api/cart", proxy(ORDER_URL));

// Payment Service: /api/payment/*, /api/sms/*
app.use("/api/payment", proxy(PAYMENT_URL));
app.use("/api/sms", proxy(PAYMENT_URL));

// Delivery Service: /api/delivery/*, /api/Delivery/*
app.use("/api/delivery", proxy(DELIVERY_URL));
app.use("/api/Delivery", proxy(DELIVERY_URL));

// Email Service: /api/Email/*
app.use("/api/Email", proxy(EMAIL_URL));

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "API Gateway is running", services: {
    auth: AUTH_URL,
    restaurant: RESTAURANT_URL,
    order: ORDER_URL,
    payment: PAYMENT_URL,
    delivery: DELIVERY_URL,
    email: EMAIL_URL,
  }});
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
