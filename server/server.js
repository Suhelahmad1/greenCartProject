import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import "dotenv/config";
import userRouter from "./routes/user.routes.js";
import sellerRouter from "./routes/seller.routes.js";
import connectCloudinary from "./configs/cloudinary.js";
import cartRouter from "./routes/cart.routes.js";
import addressRouter from "./routes/address.routes.js";
import orderRouter from "./routes/order.route.js";
import productRouter from "./routes/product.routes.js";
import { stripeWebhooks } from "./controllers/order.controllers.js";

const app = express();
const port = process.env.PORT || 4000;

await connectDB();
await connectCloudinary();

const allowedOrigins = [
  "http://localhost:5173",
  "https://greencart-frontend-wine.vercel.app",
  "https://greencart-frontend-gjpck95yq-suhel-ahmads-projects.vercel.app",
];

app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// middleware configuration
app.use(express.json());
app.use(cookieParser());

// Pro-level CORS configuration jo dynamic aur production URLs dono ko handle karega
app.use(
  cors({
    origin: function (origin, callback) {
      // Postman ya bina origin ki requests ko allow karne ke liye !origin check zaroori hai
      if (
        !origin ||
        allowedOrigins.includes(origin) ||
        origin.endsWith(".vercel.app")
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
  }),
);

app.get("/", (req, res) => res.send("API is working"));
app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
