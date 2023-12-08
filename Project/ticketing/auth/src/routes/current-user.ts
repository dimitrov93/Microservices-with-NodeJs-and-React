import express from "express";
const router = express.Router();
import { currentUser } from "../middlewares/current-user";

router.get("/api/users/currentuser", currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
