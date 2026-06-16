import express from "express";
import authUser from "../middlewares/authUser.middleware.js";
import { addAddress, getAddress } from "../controllers/addAddess.controller.js";

const addressRouter = express.Router();

addressRouter.post("/add", authUser, addAddress);
addressRouter.get("/get", authUser, getAddress);

export default addressRouter;
