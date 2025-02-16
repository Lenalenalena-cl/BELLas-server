import express from "express";
import { getVotes, postVote } from "../controllers/votes-controller.js";

const votesRoutes = express.Router();

votesRoutes.route("/").get(getVotes).post(postVote);

export default votesRoutes;
