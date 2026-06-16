import express from "express";
import {
  isSellerAuth,
  sellerLogin,
  sellerLogout,
} from "../controllers/seller.controllers.js";
import authSeller from "../middlewares/authSeller.middlewares.js";

const sellerRouter = express.Router();

sellerRouter.post("/login", sellerLogin);
sellerRouter.get("/is-auth", authSeller, isSellerAuth);
sellerRouter.get("/logout", sellerLogout);

export default sellerRouter;
